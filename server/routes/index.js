const express = require('express'),
      morgan = require('morgan').
      parser = require('body-parse');

const app = express();

//middleware
app.require('body-parser')
  .require('morgan');

const port = 8080;
// app.set('port', process.env.PORT || 8080);
app.listen(port, () => console.log(`listening on port http://localhost:${8080}`));
