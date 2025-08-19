const express = require("express");
const cors = require("cors");
const infoRoutes = require("./routes/info")
const authRoutes = require("./routes/auth")



const app = express();

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
//     allowedHeaders: "Content-Type",
//   })
// );

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;



app.use('/auth', authRoutes)
app.use('/info', infoRoutes)


app.listen(PORT, () => {
  console.log("App listening to port " + PORT);
});
