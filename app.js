var express=require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var {userdetails_model}=require('./modules/userdetails')



mongoose.connect('mongodb+srv://root:root@cluster0.bi1zi.mongodb.net/shoppingApp?retryWrites=true&w=majority',{ useNewUrlParser: true})
var app=express()

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)
// parse application/json
app.use(bodyParser.json())

app.post('/register', (request,response)=>{
    var usermodelobj = new userdetails_model(request.body);
    usermodelobj.save((error)=>{
        if(error){
            response.json({
                "ResponseStatus": error,
                "ResponseCode":  000
            })
        }else{
            response.json({
                "ResponseStatus": "Successfully Registered ",
                "ResponseCode" : 100
            })
        }
    })

})

app.post('/getAllUserDetails', async (Request,response)=>{
    
    try{
        var userdeails = await userdetails_model.find()
        response.json({
            "ResponseStatus": "Successfully fetch user details ",
            "ResponseCode" : 100,
            "UserDetails" : userdeails
        })

    }catch(error){
        response.json({
            "ResponseStatus": error,
            "ResponseCode":  000
        })
    }
})

app.get("/",(request,response)=>{
    response.send('Welcome to shopping app')
})


app.listen( process.env.PORT ||  3000,()=>{
    console.log('server stated : http://localhost:3000/')

})
