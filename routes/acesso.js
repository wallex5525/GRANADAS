module.exports = function (app) {
    var acesso = app.controllers.acesso;
    app.get("/", acesso.index);
    app.post("/entrar", acesso.login);
}