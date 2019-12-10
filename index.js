require('dotenv').config({ silent: true, path: './config/config.env' });

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  console.log("Request Made");
  env_test = process.env.ENV_TEST
  res.send(env_test);
});
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});