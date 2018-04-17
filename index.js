const express = require('express'),
      mongoose = require('mongoose'),
      keys = require('./config/keys'),
      app = express();
      
mongoose.connect(keys.mongoURI);
require('./services/passport.js');
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;


app.listen(PORT);
