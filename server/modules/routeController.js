const bodyParser = require('body-parser')
const app = require('express')();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function rsp(res, content) {
    res.send({
      statusCode: 200,
      content,
    });
    res.end();
}

module.exports = {
  app,
  rsp,
};
