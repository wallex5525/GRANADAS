module.exports = function (app) {
    const mongoose = require("mongoose"); // #<<
    let Schema = require("mongoose").Schema; // #<<

    let mapa = Schema({
       nome_mapa: {type: String, requerid: true} ,
       comentarios: [],
       granadas: []
    });
    return mongoose.model("mapas", mapa); // #<<
};