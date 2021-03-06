const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Surveys')
require('./services/passport');

mongoose.connect(keys.mongoURI,{useNewUrlParser:true, useUnifiedTopology:true});

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app)

if(process.env.NODE_ENV === 'production')
{
  // Express servirá assets de producción
  // como main.js file, o main.css
  app.use(express.static('client/build'))


  // Express servirá el fichero index.html,
  // si no reconoce la ruta
  const path = require('path')
  app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
