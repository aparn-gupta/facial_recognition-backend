const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

 const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  
    database: process.env.DB_DATABASE,
  });


  const connectPool = async () => {
    try {
      const conn = await pool.getConnection()
      conn.release()
  
    } catch (err) {
      console.log(err)
    }
  }

  connectPool()
  



  module.exports = pool;