module.exports = function (app) {
    var CRUDcomentario = {
        show: function (req, res) {
            var id = req.params.id,
                comentario = req.session.usuario.comentarios[id],
                params = { comentario: comentario, id:id };
            res.render("comentarios/show", params);
        },
        creat: function (req, res) {
            var comentario = req.body.comentario,
                usuario = req.session.usuario;
            usuario.comentarios.push(comentario)
            res.redirect("/dust2");
        },
        edit: function (req, res) {
            var id = req.params.id,
                usuario = req.session.usuario,
                comentario = usuario.comentarios[id],
                params = { usuario: usuario, comentario: comentario, id: id };
            res.render("comentarios/edit", params);
        },
        update: function (req, res) {
            var comentario = req.body.comentario,
                usuario = req.session.usuario;
            usuario.comentarios[req.params.id] = comentario;
            res.redirect("/dust2");
        },

        destroy: function (req, res) {
            var usuario = req.session.usuario,
                id = req.params.id;
            usuario.comentarios.splice(id, 1);
            res.redirect("/dust2");
        },


    };
    return CRUDcomentario;
};
