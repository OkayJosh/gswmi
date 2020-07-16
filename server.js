const cors = require('cors'); 
const compression = require('compression')
const express = require('express');
const path = require('path');
const app = express();

// fix to use compression
app.use(compression());

// fix to allow cross origin resource sharing
app.use(cors());

//server static files............
app.use(express.static(__dirname + '/dist/gswmiangular'));


//send all request to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/gswmiangular/index.html'
    ))
})

//default Heroku PORT
app.listen(process.env.PORT || 3000);