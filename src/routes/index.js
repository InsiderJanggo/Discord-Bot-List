const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "Discord Bot List"
    })
})

module.exports = router;