'use strict'

// Express
const express = require('express');
const app = express();

// Arquivos estáticos
app.use(express.static('public'));
app.set('view engine', 'ejs');


// BodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Routers
const routerHomepage = require('./Routers/routerHomepage');
app.use('/', routerHomepage);

const PORT = process.env.PORT || 6565; 
app.listen(PORT, () => {
    console.log(`\n✅ Servidor conectado na porta: ${PORT}`);
});