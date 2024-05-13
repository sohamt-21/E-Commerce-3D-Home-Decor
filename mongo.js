const mongoose  = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/database")

.then(() =>{
    console.log("mongodb connected");
})
.catch( ()=> {
    console.log("Failed")
})

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    surname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection