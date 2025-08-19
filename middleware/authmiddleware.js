const jwt = require("jsonwebtoken")



const verifyToken  =  (req, res, next) => {
    const token  = req.header("Authorization")
    if (!token) {
        res.status(401).json({message: "No access token found. Access Denied"})
    } else {


        try {

            const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)
            req.user = decoded
            next()


        } catch (err) {

            console.log("Invalid Token")
            res.status(403).json({message: "Token invalid. Access denied."})
        }
      
    }



    






}


module.exports = verifyToken
