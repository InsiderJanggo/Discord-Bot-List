const router = require("express").Router();

const checkAuth = (req, res, next) => {
    if(!req.session.user) return res.redirect('/');
    else return next();
}

router.get("/", checkAuth ,(req, res, next) => {
    req.session.destroy();
    res.redirect("/");
})

module.exports = router;