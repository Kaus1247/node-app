var express = require("express");
 
var app = express();

app.get("/", function (req, res) {
 res.send("Hi Shahid");
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
