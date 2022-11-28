module.exports = function (app) {
    var NegadoController = {
        index: function (req, res) {
            res.render('negado/index');
        },
        comentario: function (req, res) {
            res.render('negado/comentario');
        }
    };
    return NegadoController;
};
