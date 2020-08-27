const {Event} = require("klasa");

module.exports = class extends Event {
    async run(message,member) {
        if(member.user.bot) {
            member.roles.add(member.guild.roles.cache.get(process.env.BOT_ROLE));
            member.roles.add(member.guild.roles.cache.get(process.env.UNVERIFIED_ROLE));
            message.channel.send(`${member.user.bot}, Another Bot Has Join The Server`);
        }
        if(member.user) {
            message.channel.send(`Welcome ${member.user} To Server Make Sure To Read Rules.`)
        }
    }
}