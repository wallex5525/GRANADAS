module.exports = function (app) {
    app.post("/nota", app.controllers.CRUDnota.creat);
    app.get("/nota/:id", app.controllers.CRUDnota.show);
    app.get("/nota/:id/editar", app.controllers.CRUDnota.edit);
    app.put("/nota/:id", app.controllers.CRUDnota.update);
    app.delete("/nota/:id", app.controllers.CRUDnota.destroy);
}