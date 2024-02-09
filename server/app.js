const express = require ('express');
const cors =require ('cors'); //cross origin resource sharing 
const logger = require ('./middleware/logger');
const countryRouter = require ('./routers/countries')
const app = express()

//middlewares
app.use(express.json());
app.use(cors());
app.use(logger);
// the syntax below connected to routers.countries line 5. In here we are following the REST principle of URL uniformity!
app.use("/countries", countryRouter) 


module.exports = app;