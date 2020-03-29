const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // (./) para o node entender que se trata de um arquivo e não um pacote

const app = express();

/**
 * Cors: Controle de acesso a API
 */
//Ambiente Localhost (Desenvolvimento)
app.use(cors());
//Ambiente Remoto (Web)
/*app.use(cors({
    origin: 'http://meuapp.com'
}));*/
app.use(express.json()); //Informar para a aplicação que será utilizado requisições em formato JSON
app.use(routes);

app.listen(3333);