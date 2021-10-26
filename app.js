var express=require('express')
var bodyParser = require('body-parser')



var app=express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : false})


app.listen(3000,()=>{
    console.log('server stated : http://localhost:3000/')

})
