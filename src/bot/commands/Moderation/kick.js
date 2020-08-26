const {Command} = require("klasa");
const {MessageEmbed} = require("discord.js");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "kick",
            aliases: [""],
            description:"Kick Mention User",
            cooldown: 30,
            permissionLevel: 6,
            requirePermission: ["MANAGE_MEMBERS"],
            usage: "(User:user) (String:reason)"
        }) 
    }

    async run(message, [mention, ...reason]) {
        if(!mention) return message.channel.send(`${message.author} Please Mention A User`);
        
    }
}