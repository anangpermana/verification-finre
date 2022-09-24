const mongoose = require("mongoose");

const checkConection = (req, res, next) => {
    mongoose.connect(process.env.MONGO_URI)
    console.log(mongoose.connection.readyState)
    let status_mongo = mongoose.connection.readyState
    if(status_mongo == 0 ) {

        mongoose.connection.close()
        res.status(500).send({message: "mongoDB disconected"})
    }else{

        next()
    }
    // try {
    //     // await mongoose.connect(process.env.MONGO_URI, {userNewUrlParser:true})
    // } catch (error) {
    //     mongoose.connection.on('error', err=> {
    //         console.log(err)
    //     })
    // }
}

module.exports = {
    checkConection
}