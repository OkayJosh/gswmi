const express = require('express');
const path = require('path');
const app = express();


//server static files............
app.use(express.static(__dirname + '/dist/gswmiangular'));

//send all request to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/gswmiangular/index.html'
    ))
})
// fix to allow cross origin resource sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });

//default Heroku PORT
app.listen(process.env.PORT || 3000);