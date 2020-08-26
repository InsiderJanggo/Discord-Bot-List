const {Client, Schema} = require("klasa");

Client.defaultPermissionLevels
        .add(8, ({c, author}) => process.env.ADMIN_USERS_ID.includes(author.id))

const client = new Client({
    commandEditing: true,
    prefix: process.env.PREFIX,
    presence: `Listening To ${process.env.PREFIX}`,
    owners: process.env.OWNER,
    disabledCorePieces: ["commands"],
    consoleEvents: {
        log: false,
        error: false,
        warn: false
    },
    production: true,
    version: "1.0.0"
});

module.exports.init = async(token) => {
    client.userBaseDirectory = __dirname;
    await client.login(token);
    return client;
}