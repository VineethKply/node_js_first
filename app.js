var express=require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var {userdetails_model}=require('./modules/userdetails')




var app=express()

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)
// parse application/json
app.use(bodyParser.json())

app.post('/', (request,response)=>{

    var usermodelobj = new userdetails_model(request.body);
    response.send(usermodelobj)

})

app.get("/",(request,response)=>{
    response.send('server stated : http://localhost:3000/ get ')
})


app.listen(3000,()=>{
    console.log('server stated : http://localhost:3000/')

})
