module.exports = function (app) {
    let home = app.controllers.home;
    let autenticar = require("../middlewares/autenticador");
    app.get("/home", autenticar, home.index);
}