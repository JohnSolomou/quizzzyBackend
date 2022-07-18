
--set extention
CREATE TABLE IF NOT EXISTS users(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );

CREATE TABLE IF NOT EXISTS quiz(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question VARCHAR(255) NOT NULL,
    answer VARCHAR(255) NOT NULL
  );

