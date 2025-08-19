const express = require("express");
const authMiddleware = require("../middleware/authmiddleware")
const pool = require("../config/config")
const infoRouter = express.Router()
const cors = require("cors");




infoRouter.use(cors())




infoRouter.post('/newfeeling', authMiddleware, async (req, res,) => {

    if (!req.body.title && !req.body.mood && !req.body.description ) {
        res.status(400).json({success: false, message: "Can't process empty request body. Please fill atleast one of the three fields."})
        return
    }

    const {title, mood, description} = req.body
    const currentTime  = new Date().toLocaleString()
try {

    const [rows] = await pool.query("INSERT INTO feelings (title, mood, feeling_notes, post_time) VALUES (?, ?, ?, ?);", [title, mood, description, currentTime] )

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
            allFeelings: rows
            

        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            messahe: "Internal server error"
        })
    }

    

})


module.exports = infoRouter
