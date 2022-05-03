const Pool = require("pg").Pool;
require("dotenv").config();

// database connection

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "quiz",
  password: process.env.PGDB_PASSWORD,
  prot: 5432,
});

module.exports = pool;
