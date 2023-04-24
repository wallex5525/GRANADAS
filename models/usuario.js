module.exports = function (app) {
    const mongoose = require("mongoose"); // #<<
    let Schema = require("mongoose").Schema; // #<<
    let contato = Schema({ // #<<
        nome: String,
        email: String,
    });
    var usuario = Schema({
        nome: { type: String, required: true },
        email: { type: String, required: true, index: { unique: true } },
        senha: {type: String, required: true}
    });
    return mongoose.model("usuarios", usuario); // #<<
};