var express=require('express')
var bodyParser = require('body-parser')



var app=express()

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)
// parse application/json
app.use(bodyParser.json())

app.post('/', (request,response)=>{
    console.log('server stated : http://localhost:3000/ post ')
})

app.get("/",(request,response)=>{
    console.log('server stated : http://localhost:3000/ get ')
})


app.listen(3000,()=>{
    console.log('server stated : http://localhost:3000/')

})
