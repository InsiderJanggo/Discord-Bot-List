const { Command } = require("klasa");
const { MessageEmbed } = require("discord.js");
var modlog;

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            permissionLevel: 8,
            usage: '[User:user]'
        });
    }

    async run(message, [user]) {
        if(!user || !user.bot) return message.channel.send("Ping A **Bot**");
        let updated = JSON.parse(message.client.settings.get('bots'));

        updated.find(u => u.id === user.id).state = "verified";
        message.client.settings.update("bots", JSON.stringify(updated));
        let res = updated.find(u => u.id === user.id);
        let embed = new MessageEmbed()
        .setTitle("Bot Verified")
        .addField('Bot', `<@${res.id}>`, true)
        .addField('Owner', `<@${res.owners[0]}>`, true)
        .addField("Mod", message.author, true)
        .setThumbnail(res.logo)
        .setTimestamp()
        .setColor("GREEN")
        modlog.send(embed);
        modlog.send(`<@${res.owners[0]}>`).then(m => {m.delete()});

        message.guild.members.fetch(message.client.users.cache.find(u => u.id === res.owners[0])).then(owner => {
            owner.roles.add(message.guild.roles.cache.get(process.env.BOT_DEVELOPER_ROLE_ID));
        })

        message.guild.members.fetch(message.client.users.cache.find(u => u.id === res.id)).then(bot => {
            bot.roles.set([process.env.BOT_ROLE, process.env.VERIFIED_ROLE])
        })

        message.channel.send(`Verified\`${res.name}\``);
    }

    async init() {
        modlog = this.client.channels.cache.get(process.env.MOD_LOG_ID);
    }
}