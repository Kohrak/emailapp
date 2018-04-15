const express = require('express'),
      app = express();

require('./services/passport.js');
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;


app.listen(PORT);
