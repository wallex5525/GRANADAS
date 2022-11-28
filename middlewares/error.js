exports.notFound = function (req, res, next) {
    if (!req.session.usuario) {
        res.status(404);
        res.render("not-found-no-login");
    }
    else {
        res.status(404);
        res.render("not-found-with-login");
    }
};

exports.serverError = function (error, req, res, next) {
    res.status(500);
    res.render("server-error", { error: error });
};