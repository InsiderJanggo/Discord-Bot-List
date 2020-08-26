const router = require("express").Router();

router.get("/", (req, res) => {
    res.redirect(process.env.INVITE);
});

module.exports = router;