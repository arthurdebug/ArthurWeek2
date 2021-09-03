//set up express services
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

//knex setup
// require('dotenv').config();
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

//set up cors
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));
//fileupload setup

const LinkRouter = require('./routers/LinkRouter')
const LinkServices = require('./services/LinkService');
const linkServices = new LinkServices(knex)
app.use("/api/link/", new LinkRouter(linkServices).router());
app.listen(8080, () => {
    console.log('port is listening to 8080')
})
