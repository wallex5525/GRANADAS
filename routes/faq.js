module.exports = function (app) {
    var faq = app.controllers.faq;
    app.get("/duvidas", faq.index);

    app.post("/createfaq", faq.create);
    app.get("/duvida/:id", faq.show);
    app.get("/duvida/:id/editar", faq.edit);
    app.put("/duvida/:id", faq.update);
    app.delete("/duvida/:id", faq.delete);
}