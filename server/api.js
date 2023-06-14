const bodyParser = require('body-parser')
const app = require('express')();

// Server modules
const md = require('./modules/readme-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .get('/', async (req, res) => {
    res.send({
      statusCode: 200,
      data: await md.render('### TEST'),
    });
    res.end();
  })
  .get('/readme/get', async (req, res) => {
    const page = req?.query?.page || 'default';
    res.send({
      html: await md.renderFromFile(page),
    });
    res.end();
  });

module.exports = app;
