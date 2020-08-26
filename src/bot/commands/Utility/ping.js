const {Command} = require("klasa");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "ping",
            aliases: ["latency"],
            cooldown: 10,
            description: "Check The Bot latency",
            usage: "[none]"
        })
    }

    async run(message, [...params]) {
        let now = Date.now();
        let m = await message.channel.send("Pinging...");
        m.edit(`Pong: ${Date.now() - now} ms`)
        message.delete();
    }
}