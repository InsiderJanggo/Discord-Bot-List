const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("me", {
        user: req.session.user || null,
        pageTitle: "Discord Bot List"
    })
})
 
module.exports = router;