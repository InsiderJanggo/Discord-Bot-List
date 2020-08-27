const {} = require("klasa");
const { Message } = require("discord.js");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "botcount",
            aliases: ["count"],
            runIn: ['text'],
            permLevel: 0,
            botPerms: ["SEND_MESSAGES"],
            requireSettings: [],
            description:"Check How Many Bot Are In The List"
        })
    }

    async run(message) {
        let ans = JSON.parse(message.client.settings.get('bots')).filter(x => !x.state === "deleted")
        message.channel.send(`There Are \`${ans.length}\` bots in the list`);
    }
}