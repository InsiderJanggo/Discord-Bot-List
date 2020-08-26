const router = require("express").Router();

const fetch = require("node-fetch");
const FormData = require("form-data")

let SCOPE = ["identify"];

const {
    OAUTH2_URL,REDIRECT_URL,CLIENT_ID,CLIENT_SECRET 
} = process.env;

router.get("/", (req, res) => {
    if(req.session.user) return res.redirect('/');

    res.redirect(OAUTH2_URL);
})

router.get("/callback", (req, res) => {
    if(req.session.user) return res.redirect('/');

    const accessCode = req.query.code;
    if(!accessCode) throw new Error("No Access Code From Discord");

    const data = new FormData()
    data.append('client_id', CLIENT_ID)
    data.append('client_secret', CLIENT_SECRET)
    data.append('grant_type', 'authorization_code')
    data.append('redirect_url', REDIRECT_URL)
    data.append('scope', SCOPE.join(' '))
    data.append('code', accessCode)

    fetch("https://discordapp.com/api/oauth2/token", {
        method: "GET",
        body: data
    })
    .then(res => res.json())
    .then(response => {
        fetch("https://discordapp.com/api/users/@me", {
            method: "GET",
            headers: {
                authorization: `${response.token_type} ${response.access_token}`
            },
        })
        .then(res2 => res2.json())
        .then(userRes => {
            userRes.tag = `${userRes.username}#${userRes.discriminator}`;
            userRes.avatarURL = userRes.avatar ? `https://cdn.discordapp.com/avatars/${userRes.id}/${userRes.avatar}?size=256` : null;

            req.sesion.user = userRes;
            res.redirect("/");
        })
    })
})

module.exports = router;