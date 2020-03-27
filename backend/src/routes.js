const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rotas de Exemplo (Para estudo)
 * 
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.get('/', (request, response) => {
    return response.send('Hello World');
});

//GET - Query Params (request.query)
routes.get('/users', (request, response) => {
    const query = request.query;

    console.log(query);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rafael Oliveira'
    });
});

//GET - Route Params (request.params) Ex: Rota = (/users/:id)
routes.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rafael Oliveira'
    });
});

//POST - Request Body (request.body) - Ex: Rota = (/users)
routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rafael Oliveira Chapouto'
    });
});

/**
 * Rotas da Aplicação
 */
//GET
routes.get('/ongs', OngController.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', ProfileController.index);

//POST
routes.post('/sessions', SessionController.create);
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;