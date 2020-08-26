const {Event} = require("klasa");

module.exports = class extends Event {
    async run(member) {
        if(member.user.bot) {
            member.roles.add(member.guild.roles.cache.get(process.env.BOT_ROLE));
            member.roles.add(member.guild.roles.cache.get(process.env.UNVERIFIED_ROLE));
        }
    }
}