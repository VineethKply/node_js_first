var mongoose=require('mongoose')
var userdetailsSchema = new mongoose.Schema({
    name : { 
        type : String , 
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
    }
});

var userdetails_model=mongoose.model("users",userdetailsSchema)
module.exports = {userdetails_model} 

