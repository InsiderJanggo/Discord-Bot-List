const {Event} = require("klasa");

module.exports = class extends Event {
    run(message) {
        console.log(`${this.client.user.username} Is Ready`)
        console.log(`${this.client.options.prefix}`);
    }
}