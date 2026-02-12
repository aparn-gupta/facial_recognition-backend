const express = require("express");
const authMiddleware = require("../middleware/authmiddleware")
const pool = require("../config/config")
const infoRouter = express.Router()
const cors = require("cors");




infoRouter.use(cors())




infoRouter.post('/newfeeling/:userid', authMiddleware, async (req, res,) => {

    if (!req.body.title && !req.body.mood && !req.body.description ) {
        res.status(400).json({success: false, message: "Can't process empty request body. Please fill atleast one of the three fields."})
        return
    }

    const userId = req.params.userid

    const {title, mood, description} = req.body
    const currentTime  = new Date().toLocaleString()
try {

    const result = await pool.query("INSERT INTO feelings (title, mood, feeling_notes, post_time, user_id) VALUES ($1, $2, $3, $4, $5);", [title, mood, description, currentTime, userId] )

    console.log(result)

    res.status(200).json({
        success: true,
        message: `Feeling posted. Insert Id: ${result.rows.insertId}`
    })
} catch (err) {
    console.log(err)
    res.status(500).json({success : false, message: "Posting failed, server error"})
}




})


infoRouter.get('/allfeelings/:userid', async (req, res) => {
    const userId = req.params.userid

    try {
        const result  = await pool.query("SELECT * from feelings where user_id  = $1 order by feeling_id", [userId])

        res.json({
            success: true,
            allFeelings: result.rows
            

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
