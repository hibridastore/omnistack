const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

module.exports = routes;






//return response.send('Hello World');
//const params = request.query; Retorna os GETs
//const params = request.params; Retorna os Parametros URL Amigaveis


/* 
Rotas / Recursos 
*/

/* 
Métodos HTTP:
GET: Buscar ou Listar uma informação no back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

/* 
Tipos de Parâmetros:

Query: Parametros nomeados enviados na rota após a interrogação (Filtros / Paginação / Etc)
Route Params: Parametros utilizados para identificar recursos
Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
*/

/*
Comandos
npm start (Para Iniciar a aplicação)
node index.js (Para iniciar o servidor)
npm install nodemon -D
nodemon index.js
*/

