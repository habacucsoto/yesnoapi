const models = require('../database/models');

const createResponse = async (req, res) => {
    try {
        const response = await models.Response.create(req.body);
        return res.status(201).json({
            response
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getResponse = async (req, res) => {
    console.log('getting response');
    // try {
    //     let response = await models.Response.findOne({
    //         order: models.Sequelize.literal('RANDOM()')
    //     });

    //     if (!response) {
    //         // Crea un registro predeterminado
    //         response = await models.Response.create({
    //             response: "Yes",
    //             gif: "https://firebasestorage.googleapis.com/v0/b/yesnoapi-dc638.appspot.com/o/giphies%2Fyes%2F7.webp?alt=media&token=0280078f-1cc3-473c-a7be-cc64cbc3645d"
    //         });
    //     }
    //     return res.status(200).json({ response });
    try {
        const response = await models.Response.findAll({
            include: [
            ]
        })
        return res.status(200).json({ response })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createResponse,
    getResponse
}