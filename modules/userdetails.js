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
        type : email;
        require : true
    },
    pnone : {
        type : Number,
        maxlength : 11,
        minlength : 10
    }
});

var userdetails_model=mongoose.model("users",userdetailsSchema)
module.exports('user_model')

