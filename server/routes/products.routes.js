const ProjectController = require('../controllers/products.controller');

module.exports = (app) => {
  app.get('/api/products', ProjectController.index);
  app.post('/api/products', ProjectController.create);
  app.get('/api/products/:id', ProjectController.show);
  app.put('/api/products/:id', ProjectController.update);
  app.delete('/api/products/:id', ProjectController.destroy);
}