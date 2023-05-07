module.exports = function (app) {
    let Mapa = app.models.mapa;

    var CRUDcomentario = {
        show: async function (req, res) {
            var id = req.params.id,
                usuario_comentario = req.params.nome_usuario;
            let comentario;
            let usuario_sessao = req.session.usuario.nome;
            let nome_mapa = "dust2";

            console.log(usuario_sessao, usuario_comentario)

            if (usuario_comentario === usuario_sessao) {
                await Mapa.findOne({ nome_mapa: nome_mapa })
                    .then(mapa => {
                        comentario = mapa.comentarios[id];
                    })
                    .catch(erro => {
                        console.log("Ocorreu um erro", erro);
                    });
                let params = { comentario: comentario, id: id, nome_usuario: usuario_sessao};
                res.render("comentarios/show", params);
            } else {
                res.redirect("/dust2")
            }

        },
        creat: async function (req, res) {
            var comentario = req.body.comentario,
                usuario = req.session.usuario;
            let nome_mapa = "dust2";

            await Mapa.findOne({ nome_mapa: nome_mapa })
                .then(async (mapa) => {
                    mapa.comentarios.push({ "nome_usuario": usuario.nome, "comentario": comentario.comentario })
                    await mapa.save()
                        .then(console.log("funfou"))
                        .catch((err) => console.log(err))
                })
                .catch(erro => {
                    console.log("Ocorreu um erro", erro);
                });
            res.redirect("/dust2");
        },
        edit: async function (req, res) {
            var id = req.params.id,
                usuario = req.session.usuario;
            let comentario;
            let nome_mapa = "dust2";

            await Mapa.findOne({ nome_mapa: nome_mapa })
                .then(async (mapa) => {
                    comentario = mapa.comentarios[id];
                })
                .catch(erro => {
                    console.log("Ocorreu um erro", erro);
                });
            let params = { nome_usuario: usuario.nome, comentario: comentario, id: id };
            res.render("comentarios/edit", params);
        },
        update: async function (req, res) {
            var comentario = req.body.comentario;

            let nome_mapa = "dust2";
            await Mapa.findOne({ nome_mapa: nome_mapa })
                .then(async (mapa) => {
                    let update_comentario = { nome_usuario: req.session.usuario.nome, comentario: comentario.comentario }
                    mapa.comentarios[req.params.id] = update_comentario;

                    await mapa.save()
                        .then(console.log("funfou"))
                        .catch((err) => console.log(err))
                    console.log(mapa)
                })
                .catch(erro => {
                    console.log("Ocorreu um erro", erro);
                });
            res.redirect("/dust2");
        },

        destroy: async function (req, res) {
            let id = req.params.id;
            let nome_mapa = "dust2";
            await Mapa.findOne({ nome_mapa: nome_mapa })
                .then(async (mapa) => {
                    mapa.comentarios.splice(id, 1);
                    await mapa.save()
                        .then(console.log("funfou"))
                        .catch((err) => console.log(err))
                })
                .catch(erro => {
                    console.log("Ocorreu um erro", erro);
                });
            res.redirect("/dust2");
        },


    };
    return CRUDcomentario;
};
