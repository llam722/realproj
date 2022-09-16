const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;
const apiRouter = require('./routers/apiRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.resolve(__dirname, 'src')));

app.use(cors());
app.use('/', apiRouter);

app.use('*', (err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
