const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


export const infoRouter = express.Router()



infoRouter.post('newfeeling', async (req, res) => {
    


})


infoRouter.get('allfeelings', async (req, res) => {

})



