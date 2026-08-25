// const dotenv = require("dotenv");
// const { Pool } = require("pg")

// dotenv.config();

//  // const pool = new Pool ({
//  //    host: process.env.DB_HOST,
//  //    user: process.env.DB_USER,
//  //    password: process.env.DB_PASSWORD,

//  //    database: process.env.DB_DATABASE,
//  //    port: 5435
//  //  });

//  const pool = new Pool ({
//    connectionString: process.env.DB_URI,
//    ssl: {
//     rejectUnauthorized: false,

//   },
//   max: 1,
//   });

//   // const connectPool = async () => {
//   //   try {
//   //     const client = await pool.connect()
//   //     const result  = await client.query("select * from facedata")
//   //     console.log(result.rows)

//   //   } catch (err) {
//   //     console.log(err)
//   //   }
//   // }

//   // connectPool()

//   module.exports = pool;

const { Pool } = require("pg");
const { Signer } = require("@aws-sdk/rds-signer");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();

const signer = new Signer({
  hostname: process.env.AWS_HOST,
  port: process.env.AWS_PORT,
  region: process.env.AWS_REGION,
  username: process.env.AWS_USERNAME,
});

// console.log(
//   process.env.AWS_REGION,
//   process.env.AWS_HOST,
//   process.env.AWS_DB,
//   process.env.AWS_PORT,
//   process.env.AWS_USERNAME,
// );

const pool = new Pool({
  host: process.env.AWS_HOST,

  port: process.env.AWS_PORT,
  password: () => signer.getAuthToken(),
  user: process.env.AWS_USERNAME,
  database: process.env.AWS_DB,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = pool;
