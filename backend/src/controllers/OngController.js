const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //Select
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    //Insert
    async create(request, response) {
        /**
         * { name, email, whatsapp, city, uf }
         * Desestruturação: Não permitir que o usuário envie algum dado não solicitado pela aplicação
         */
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        return response.json({ id });
    }
};