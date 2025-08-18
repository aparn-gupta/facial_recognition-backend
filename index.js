const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const infoRoutes = require("./routes/info")

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    allowedHeaders: "Content-Type",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,

  database: process.env.DB_DATABASE,
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log(err);
    return;
  }
});

let allComparisons = [];

const faceMatcher = (desOne, desTwo, userName, userId) => {
  // console.log(desOne)
  // console.log(desTwo)
  const desOneParsed = Array.isArray(desOne) ? desOne : JSON.parse(desOne);

  let differenceOfSquares = [];

  for (let a = 0; a < desTwo.length; a++) {
    let differenesForEachPoint = Number(desOneParsed[a]) - Number(desTwo[a]);
    differenceOfSquares.push(Math.pow(differenesForEachPoint, 2));
    // console.log(a, desTwo[a])
    // console.log(a, desOneParsed[a])
  }

  // console.log(differenceOfSquares)

  let sumOfDifferences = 0;

  for (let each of differenceOfSquares) {
    sumOfDifferences += each;
  }

  // console.log(sumOfDifferences)

  const euclideanDistance = Math.sqrt(sumOfDifferences);

  // console.log(euclideanDistance, username);
  allComparisons.push({
    distanceIndicator: euclideanDistance,
    personName: userName,
    personId: userId,
  });
};

const faceMatcherForLogin = (desOne, desTwo) => {
  const desOneParsed = Array.isArray(desOne) ? desOne : JSON.parse(desOne);

  let differenceOfSquares = [];

  for (let a = 0; a < desTwo.length; a++) {
    let differenesForEachPoint = Number(desOneParsed[a]) - Number(desTwo[a]);
    differenceOfSquares.push(Math.pow(differenesForEachPoint, 2));
    // console.log(a, desTwo[a])
    // console.log(a, desOneParsed[a])
  }

  // console.log(differenceOfSquares)

  let sumOfDifferences = 0;

  for (let each of differenceOfSquares) {
    sumOfDifferences += each;
  }

  // console.log(sumOfDifferences)

  const euclideanDistance = Math.sqrt(sumOfDifferences);

  // console.log(euclideanDistance, username);
  if (euclideanDistance > 0.6) {
    return false;
  } else {
    return true;
  }
};

const findIfNoMatches = (allFacesArrays) => {
  for (let y = 0; y < allFacesArrays.length; y++) {
    if (allFacesArrays[y].distanceIndicator < 0.6) {
      return false;
    }
  }

  return true;
};

app.post("/sendfacedata", async (req, res) => {
  //    if (!req.body || !req.body.empName || !req.body.descriptorArray) {
  //     res.status(400).json({
  //         error: "must contain username and descriptor array"
  //     })

  allComparisons = [];

  const { empName, descriptorArray } = req.body;

  let currentUserFaceParsed = Array.isArray(descriptorArray)
    ? descriptorArray
    : Array.from(JSON.parse(descriptorArray));

  const [rows] = await pool.query("SELECT * FROM facedata");

  // console.log(empName, descriptorArray);

  console.log(currentUserFaceParsed);

  for (let each of rows) {
    if (each.descriptorArr) {
      faceMatcher(
        each.descriptorArr,
        currentUserFaceParsed,
        each.username,
        each.id
      );
    }
  }

  const matchResult = findIfNoMatches(allComparisons);

  // let dataInArr = []
  // for (let each of currentUserFaceParsed) {
  //   dataInArr.push(each)
  // }

  if (!matchResult) {
    res.status(200).json({
      message: "User already registred!",
    });
  } else {
    try {
      const [rows] = await pool.query(
        "INSERT INTO facedata (username,  descriptorArr) VALUES (?, ?)",
        [empName, JSON.stringify(currentUserFaceParsed)]
      );
      res.json({
        success: true,
        insertId: rows.insertId,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "error processing request" });
    }
  }

  // const {descriptorArray} = req.body
});






app.get("/hello", (req, res) => {
  res.send("Hellooooo");
});




app.post("/loginface", async (req, res) => {
  if (!req.body.userFace) {
    res.status(501).json({
      error: "Face array is required!",
    });

    return;
  }

  let { userFace } = req.body;

  allComparisons = [];

  let currentUserFaceParsed = Array.isArray(userFace)
    ? userFace
    : Array.from(JSON.parse(userFace));

  const [rows] = await pool.query("SELECT * FROM facedata");

  // console.log(empName, descriptorArray);

  // console.log(currentUserFaceParsed)

  for (let each of rows) {
    if (each.descriptorArr) {
      faceMatcher(
        each.descriptorArr,
        currentUserFaceParsed,
        each.username,
        each.id
      );
    }
  }

  // console.log(allComparisons);

  let bestMatch = allComparisons[0].distanceIndicator;
  let bestMatchUserName = allComparisons[0].personName;
  let bestMatchUserId = allComparisons[0].personId;

  const matchResult = findIfNoMatches(allComparisons);

  if (matchResult) {
    res.json({
      success: true,
      bestMatchFace: "No matching faces found",
      indicator: null,
    });
  } else {
    for (let y = 0; y < allComparisons.length; y++) {
      console.log(allComparisons[y].distanceIndicator);
      if (allComparisons[y].distanceIndicator < bestMatch) {
        bestMatch = allComparisons[y].distanceIndicator;
        bestMatchUserName = allComparisons[y].personName;
        bestMatchUserId = allComparisons[y].personId;
        console.log(allComparisons[y].personName, bestMatchUserName);
      }
    }

    // console.log(bestMatchUserName);

   const loginToken =  jwt.sign({userId: bestMatchUserId, bestMatchFace: bestMatchUserName}, process.env.JWT_SECRET)

    console.log(loginToken)

    res.json({
      success: true,
      bestMatchFace: bestMatchUserName,
      id: bestMatchUserId,
      indicator: bestMatch,
      loginToken: loginToken
    });
  }
});


app.post('/signinwithpassword', async (req, res) => {
  if (!req.body.manualUsername || !req.body.password) [
    res.status(400).json({success: false, message: "Username and Password are required for sign in"})
  ] 
  
  const {manualUsername, password} = req.body

  console.log(manualUsername, password)



try {

  const hashedPassword = await bcrypt.hash(password, 12)
  console.log(hashedPassword)
  const [rows] = await pool.query("INSERT INTO facedata (username, password) VALUES (?, ?)", [manualUsername, hashedPassword])

  res.status(200).json({
    success: true,
    result: rows.insertId

  })


} catch (err) {

  console.log(err)


  res.status(500).json({
    success: false,
    message: "Can't execute request"
  })


}



})


app.post('/loginwithpassword', async (req, res) => {

  if (!req.body.manualUsername || !req.body.password) {
    res.status(400).json({
      success: false,
      message: "Username and Password are required for logging in!"
    })
  }
  
  const {manualUsername, password} = req.body

  console.log(manualUsername, password)



try {

 
  const [rows] = await pool.query("SELECT * FROM facedata WHERE username = ?", [manualUsername])

  const isPasswordValid  = await bcrypt.compare(password, rows[0].password)




  if (isPasswordValid) {
    const loginToken = jwt.sign({userId : rows[0].id, username: rows[0].username}, process.env.JWT_SECRET)

    res.status(200).json({
      success: true,
      userId: rows[0].id,
      token: loginToken,
      userName: rows[0].username
  
    })

  } else {
    res.status(401).json({
      success: false,
      message: "Invalid credentials",
    

    })
  }




} catch (err) {

  console.log(err)


  res.status(500).json({
    success: false,
    message: "Can't execute login request"
  })


}



})

app.listen(PORT, () => {
  console.log("App listening to port " + PORT);
});
