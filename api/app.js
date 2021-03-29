const express = require('express')
// var cors = require('cors')
const app = express()
const request = require("request"); 
const port = process.env.PORT || 5000;
require('dotenv').config()

// app.use(cors());


app.get('/', (req, res) => {


  // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
  // console.log("req.params is: ", req.params); 

  // const obj = {"test": "test"}; 

  // res.header("Access-Control-Allow-Origin", "http://localhost:3002");
  res.send("Welcome to the API"); 

})

app.get('/fetchConsumerComplaints/:state', (req, res) => {


    // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    console.log("req.params is: ", req.params); 

    const { state } = req.params; 
    
    // res.header("Access-Control-Allow-Origin", "http://localhost:3002");

    // https://aqueous-atoll-87775.herokuapp.com/
    res.redirect(`https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/geo/states/?state=${state}`)

})

app.get('/fetchRobocallComplaints/:state', (req, res) => {

    console.log("req.params is: ", req.params); 

    const { state } = req.params; 
    // https://aqueous-atoll-87775.herokuapp.com/
    // res.header("Access-Control-Allow-Origin", "http://localhost:3002");
    res.redirect(`https://api.ftc.gov//v0/dnc-complaints?api_key=${process.env.API_KEY}&state="${state}"`)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})