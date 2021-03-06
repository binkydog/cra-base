const express = require('express');
const app = express();
const bodyParser = require('body-parser')

import getTime from './controllers/getTime.js'

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/test', getTime)

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
