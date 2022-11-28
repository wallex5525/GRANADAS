module.exports = function (app) {
    var faq = {
        index: function (req, res) {
            var usuario = req.session.usuario,
                duvidas = usuario.duvidas,
                params = { usuario: usuario, duvidas: duvidas };
            res.render("faq/index", params)
        },
        create: function (req, res) {
            var faq = req.body.faq;
            var usuario = req.session.usuario;
            usuario.duvidas.push(faq);
            res.redirect("/duvidas");
        },
        show: function (req, res) {
            var id = req.params.id,
                faq = req.session.usuario.duvidas[id],
                params = { faq: faq, id: id };
            res.render("faq/show", params);
        },
        update: function (req, res) {
            var faq = req.body.faq,
                usuario = req.session.usuario;
            usuario.duvidas[req.params.id] = faq;
            res.redirect("/duvidas");
        },
        delete: function (req, res) {
            var usuario = req.session.usuario,
                id = req.params.id;
            usuario.duvidas.splice(id, 1);
            res.redirect("/duvidas");

        },
        edit: function (req, res) {
            var id = req.params.id,
                usuario = req.session.usuario,
                faq = usuario.duvidas[id],
                params = { usuario: usuario, faq: faq, id: id };
            res.render("faq/edit", params);
        },
    };

    return faq;
}