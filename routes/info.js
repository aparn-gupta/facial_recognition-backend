const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const authMiddleware = require("../middleware/authmiddleware")


export const infoRouter = express.Router()



infoRouter.post('/newfeeling', authMiddleware, async (req, res,) => {

    if (!req.body.title && !req.body.mood && !req.body.feeling ) {
        res.status(400).json({success: false, message: "Can't process empty request body. Please fill atleast one of the three fields."})
    }

    const {title, mood, description} = req.body
try {

    const [rows] = await pool.query("INSERT INTO feelings (title, mood, feeling) VALUES (?, ?, ?);", [title, mood, description] )

    res.status(200).json({
        success: true,
        message: `Feeling posted. Insert Id: ${rows.insertId}`
    })
} catch (err) {
    console.log(err)
    res.status(500).json({success : false, message: "Posting failed, server error"})
}




})


infoRouter.get('/allfeelings', authMiddleware, async (req, res) => {

    try {
        const [rows]  = await pool.query("SELECT * from feelings")

        res.json({
            success: true,
            allFeelings: rows[0]
            

        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            messahe: "Internal server error"
        })
    }

    

})



