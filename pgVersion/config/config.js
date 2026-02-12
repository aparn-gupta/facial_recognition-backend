const dotenv = require("dotenv");
const { Pool } = require("pg")

dotenv.config();

 // const pool = new Pool ({
 //    host: process.env.DB_HOST,
 //    user: process.env.DB_USER,
 //    password: process.env.DB_PASSWORD,
  
 //    database: process.env.DB_DATABASE,
 //    port: 5435
 //  });


 const pool = new Pool ({
   connectionString: process.env.DB_URI,
   ssl: {
    rejectUnauthorized: false,
  },
  });



  const connectPool = async () => {
    try {
      const client = await pool.connect()
      const result  = await client.query("select * from facedata")
      console.log(result.rows)
  
    } catch (err) {
      console.log(err)
    }
  }

  connectPool()
  



  module.exports = pool;