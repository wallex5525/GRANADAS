module.exports = function (app) {
    let autenticar = require("../middlewares/autenticador");
    app.get("/dust2", autenticar, app.controllers.mapas.dust2);
    app.get("/inferno", autenticar, app.controllers.mapas.inferno);
    app.get("/mirage", autenticar, app.controllers.mapas.mirage);
    app.get("/overpass", autenticar, app.controllers.mapas.overpass);
    app.get("/vertigo", autenticar, app.controllers.mapas.vertigo);

    app.post("/criar", app.controllers.CRUDcomentario.creat);
    app.get("/comentario/:nome_usuario/:id", app.controllers.CRUDcomentario.show);
    app.get("/comentario/:nome_usuario/:id/editar", app.controllers.CRUDcomentario.edit);
    app.put("/comentario/:nome_usuario/:id", app.controllers.CRUDcomentario.update);
    app.delete("/comentario/:nome_usuario/:id", app.controllers.CRUDcomentario.destroy);
}