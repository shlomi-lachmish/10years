const inTenYears = new Date("2032/09/15").getTime()
let output = {counter: 0}
function publishTime(){
        let currentTime = new Date().getTime()
        let whatIsLeft = (inTenYears - currentTime) / 1000 / 60
        output.counter = Math.round(whatIsLeft)
        console.log(output)
    
}

    
function start(counter){
    if(counter < inTenYears /1000){
      setTimeout(function(){
        counter++;
        // console.log(counter);
        publishTime()
        start(counter);
      }, 1000);
    }
  }
  start(0);

const port = 3000
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.json(output)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })