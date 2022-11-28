module.exports = function (app) {
    var CRUDnota = {
        show: function (req, res) {
            var id = req.params.id,
                nota = req.session.usuario.nota[id],
                params = { nota: nota, id: id };
            res.render("nota/show", params);
        },
        creat: function (req, res) {
            var nota = req.body.nota;
            var usuario = req.session.usuario;
            if (usuario.nota.length == 1) {
                console.log(nota)
                res.redirect("/comentarionegado")
            } else {
                usuario.nota.push(nota)
                res.redirect("/dust2");
            }
        },
        edit: function (req, res) {
            var id = req.params.id,
                usuario = req.session.usuario,
                nota = usuario.nota[id],
                params = { usuario: usuario, nota: nota, id: id };
            res.render("nota/edit", params);
        },
        update: function (req, res) {
            var nota = req.body.nota,
                usuario = req.session.usuario;
            usuario.nota[req.params.id] = nota;
            res.redirect("/dust2");
        },

        destroy: function (req, res) {
            var usuario = req.session.usuario,
                id = req.params.id;
            usuario.nota.splice(id, 1);
            res.redirect("/dust2");
        },


    };
    return CRUDnota;
};
