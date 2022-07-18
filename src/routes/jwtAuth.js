const router = require("express").Router();
const jwtGenerator = require("../utils/jwtGenerator");
const pool = require("../db");
const bcrypt = require("bcrypt");
const validinfo = require("../middleware/validinfo");
const authorization = require("../middleware/authorization");
//registering
router.post("/register", validinfo, async (req, res) => {
  try {
    //1 destructure the req.body (name,email,password)
    const { name, email, password } = req.body;
    //2 check if user exist (if user exists then throw error )
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("user already exists");
    }
    //3 Bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);
    //4 enter the new user inside our database
    const newUser = await pool.query(
      "INSERT INTO users (name,email,password) VALUES($1,$2,$3)RETURNING *",
      [name, email, bcryptPassword]
    );
    const userInfo = newUser.rows[0];

    const token = jwtGenerator(newUser.rows[0].id);

    res.json({ user: userInfo, token });
    //5 generating out jwt token
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.post("/login", validinfo, async (req, res) => {
  try {
    //1 destructure the req.body
    const { email, password } = req.body;
    //2 check if user doesn't exist (if not then we throw error)
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).send("Password or email is incorrect");
    }
    //3 check if incoming password is the same as the database password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }

    //4 git them the jwt token

    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
module.exports = router;
