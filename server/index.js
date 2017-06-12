const express = require('express'),
      morgan = require('morgan'),
      parser = require('body-parser'),
      path = require('path'),
      routes = require('./routes');

const app = express();

//middleware
app.use(parser.json())
  .use(morgan(':method :url :status :res[content-length] - :response-time ms'));

//routes
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

const port = 8080;
// app.set('port', process.env.PORT || 8080);
app.listen(port, () => console.log(`listening on port http://localhost:${8080}`));
