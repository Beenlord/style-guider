const { app, rsp } = require('./modules/routeController.js');
const { cnt } = require('./modules/contentController.js');

app
  .get('/content', async (req, res) => {
    rsp(res, {
      content: cnt.getTree(),
    });
  //   const file = req?.query?.file ?? 'index';

  //   try {
  //     const data = fs.readFileSync('./static/content/index.md', { encoding: 'utf8', flag: 'r' });

  //     res.send({
  //       statusCode: 200,
  //       data,
  //     });
  //     res.end();
  //   } catch (Err) {
  //     console.log(Err);
  //   }

    // rsp(res, );
  })
  .get('/content/file', async (req, res) => {
  });
  // .get('/', async (req, res) => {
  //   res.send({
  //     statusCode: 200,
  //     data: '',
  //   });
  //   res.end();
  // })
  // .get('/readme/get', async (req, res) => {
  //   const page = req?.query?.page || 'default';
  //   res.send({
  //     html: await md.renderFromFile(page),
  //   });
  //   res.end();
  // })

module.exports = app;
