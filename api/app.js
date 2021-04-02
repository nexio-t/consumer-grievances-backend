const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.get("/fetchConsumerComplaints/:state", (req, res) => {
  const { state } = req.params;

  res.redirect(
    `https://www.consumerfinance.gov/data-research/consumer-complaints/search/api/v1/geo/states/?state=${state}&date_received_max=2020-12-31&date_received_min=2020-01-01`
  );
});

app.get("/fetchRobocallComplaints/:state", (req, res) => {
  const { state } = req.params;

  res.redirect(
    `https://api.ftc.gov//v0/dnc-complaints?api_key=${process.env.API_KEY}&state="${state}"&created_date_from="2020-01-01"&created_date_to="2020-12-31"`
  );
});

app.get("/fetchPopulationData", (req, res) => {
  res.redirect(
    `https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
