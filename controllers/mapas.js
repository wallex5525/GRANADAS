module.exports = function (app) {
    var Mapas = {
        dust2: function (req, res) {
            var usuario = req.session.usuario,
                comentarios = usuario.comentarios,
                nota = usuario.nota,
                params = { usuario: usuario, comentarios: comentarios, nota:nota };
            res.render("dust2/index", params);
        },
        inferno: function (req, res) {
            var usuario = req.session.usuario,
                comentarios = usuario.comentarios,
                params = { usuario: usuario, comentarios: comentarios };
            res.render('inferno/index', params);
        },
        mirage: function (req, res) {
            var usuario = req.session.usuario,
                comentarios = usuario.comentarios,
                params = { usuario: usuario, comentarios: comentarios };
            res.render('mirage/index', params);
        },
        overpass: function (req, res) {
            var usuario = req.session.usuario,
                comentarios = usuario.comentarios,
                params = { usuario: usuario, comentarios: comentarios };
            res.render('overpass/index', params);
        },
        vertigo: function (req, res) {
            var usuario = req.session.usuario,
                comentarios = usuario.comentarios,
                params = { usuario: usuario, comentarios: comentarios };
            res.render('vertigo/index', params);
        }
    };
    return Mapas;
};
