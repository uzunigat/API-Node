const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);                                           

// Middleware Functions executed before every route
app.use(express.json()); 
app.use(morgan('dev'))                                                  // Informatios of request in an specific format 

// Routes
app.use(require('./routes/phone.routes'));

// Static Files
 app.use(express.static(path.join(__dirname, 'public')));               // Load index.html

// Starting Server
app.listen(app.get('port'), () => {

    console.log(`Server on port: ${app.get('port')}`);

});