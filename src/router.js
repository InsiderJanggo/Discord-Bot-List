module.exports = (app) => {
    // '/'
    app.get("/", require("./routes/index"));

    // 'login'
    app.get("/login", require("./routes/login"));

    // '/logout'
    app.get("/logout", require("./routes/logout"));

    // '/join'
    app.get("/join", require("./routes/join"));

    // '/api/'
    app.get("/api/", require("./routes/api/index"));

    // '/me'
    app.get("/me", require("./routes/me"));
}