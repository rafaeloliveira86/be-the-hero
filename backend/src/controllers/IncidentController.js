const connection = require('../database/connection');

module.exports = {
    //Select
    /*async index(request, response) {
        const incidents = await connection('incidents').select('*');
        return response.json(incidents);
    },*/
    async index(request, response) {
        //Paginação
        const { page = 1 } = request.query;
        //Total
        /*const count = await connection('incidents').count();
        console.log(count[0]);*/
        const [count] = await connection('incidents').count();
        //console.log(count);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    //Insert
    async create(request, response) {
        /**
         * { title, description, value }
         * Desestruturação: Não permitir que o usuário envie algum dado não solicitado pela aplicação
         */
        const { title, description, value } = request.body;
        /**
         * Request Headers (Cabeçalho da Requisição)
         * É por aqui que é gerado todo o contexto de uma requisição
         * Autenticação de Login - Id de usuário como foreign key
         * Dados de Localização - Exibir uma mensagem de acordo com o idioma do usuário
         */
        const ong_id = request.headers.authorization;

        /*const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        const id = result[0];
        return response.json({ id });*/
        
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({ id });
    },

    //Delete
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};