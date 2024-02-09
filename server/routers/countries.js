const {Router} = require('express');
const countryController = require ('../controllers/countries');
const countryRouter = Router();

countryRouter.get('/', countryController.index) // this syntax is calling the async function index we wrote in models.Country 
                                                // this syntax is connected to routers.app.js

countryRouter.get('/:name', countryController.show)       
countryRouter.post('/', countryController.create)     
countryRouter.delete('/:name', countryController.destroy)                                         

module.exports = countryRouter;