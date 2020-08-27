const { Command } = require("klasa");
const Bots = require("../../../models/bots");
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "botlist",
            aliases: ["list", "bots"],
            usage: "[User:user]"
        })
    }

    async run(message, [user]) {
        let person = user ? user : message.author;

        if(person.bot) return;

        let bots = await Bots.find({owner: person.id, state: {$ne: "deleted"}});

        var cont = ''
        var un = false;
        for (let i = 0; i < bots.length; i++) {
            let bot = bots[i];
            if(bot.state == "unverified") {
                un = true
                cont += `~~<@${bot.botid}>~~\n`
            } else cont += `~~<@${bot.botid}>~~\n`
        }
        let embed = new MessageEmbed()
        .setTitle(`${person.username}#${person.discriminator}`)
        .setDescription(cont)
        .setColor(0x6b83aa)
        if(un) embed.setFooter('Bot With strikethrough are unverified')
        message.channel.send({embed})
    }
}