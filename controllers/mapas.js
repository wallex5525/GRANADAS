module.exports = function (app) {
    let Mapa = app.models.mapa;

    var Mapas = {
        dust2: async function (req, res) {
            let nome_mapa = "dust2";
            let comentarios = [];

            await Mapa.findOne({ nome_mapa: nome_mapa })
                .then(async (mapa) => {
                    if (!mapa) {
                        const MAPA = new Mapa({ nome_mapa: nome_mapa, granadas: [], comentarios: [] })
                        await MAPA.save()
                            .then(console.log("funfou"))
                            .catch((err) => console.log(err))
                    } else {
                        comentarios = mapa.comentarios;
                        console.log("entrou", comentarios)
                    }
                })
                .catch(erro => {
                    console.log("Ocorreu um erro", erro);
                });

            var usuario = req.session.usuario,
                nota = usuario.nota;
            
            let params = { usuario: usuario, comentarios: comentarios, nota: nota };
            //console.log(params)
            res.render("dust2/index", params);
        },
        inferno: function (req, res) {
            let nome_mapa = "inferno";
            let comentarios = [];

            Mapa.findOne({ nome_mapa: nome_mapa })
                .then(mapa => {
                    if (!mapa) {
                        const MAPA = new Mapa({ nome_mapa: nome_mapa, granadas: [], comentarios: [] })
                        MAPA.save()
                            .then(console.log("funfou"))
                            .catch((err) => console.log(err))
                    } else {
                        comentarios = mapa.comentarios;
                    }
                })
                .catch(erro => {
                    console.log("Ocorreu um erro", erro);
                });

            var usuario = req.session.usuario,
                nota = usuario.nota;

            let params = { usuario: usuario, comentarios: comentarios, nota: nota };
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
