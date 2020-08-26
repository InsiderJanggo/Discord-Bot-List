const {Command, RichDisplay, util: { isFunction }, Language} = require("klasa");
const {MessageEmbed, Permissions} = require("discord.js");

const PERMISSION_RICHDISPLAY = new Permissions([Permissions.FLAGS.MANAGE_MESSAGES, Permissions.FLAGS.ADD_REACTIONS]);
const time = 1000 * 60 * 3;

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "help",
            aliases: ["commands", "cmds", "cms"],
            guarded: true,
            description: (Language) => language.get("COMMAND_HELP_DESCRIPTION"),
            usage: "(Command:command)"
        })
    }

    async run(message, [command]) {

    }

    async buildHelp(message) {

    }

    async buildDisplay(message) {

    }

    async _fetchCommands(message) {
        
    }
}