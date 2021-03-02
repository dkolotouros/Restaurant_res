const {Pool} = require('pg');

const URI =
'postgres://uqyflgsa:zjfOel7Noh0BC38JCr__K-aaZN8EZF5x@ziggy.db.elephantsql.com:5432/uqyflgsa'

const pool = new Pool({connectionString: URI});

module.exports = pool;


/* DB SCHEMA

CREATE TABLE reservations (
_id serial PRIMARY KEY NOT NULL,
name varchar(100) NOT NULL,
email varchar(100) NOT NULL,
party_size int NOT NULL, 
date DATE NOT NULL,
time char(5) NOT NULL
)

*/
