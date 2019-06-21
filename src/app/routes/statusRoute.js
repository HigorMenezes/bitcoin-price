const statusController = require('../controllers/statusController');

const statusRoute = app => {
  app.get('/status', statusController.listAll);
  app.get('/status/:id', statusController.listById);

  app.post('/status', statusController.create);
  app.patch('/status/:id', statusController.edit);
};

module.exports = statusRoute;
