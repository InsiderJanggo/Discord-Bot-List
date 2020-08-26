const mongoose = require("mongoose");

const botsSchema = new mongoose.model({
    addedAt: {
        default: () => new Date(),
        type: Date
    },
    username: {
        type: String,
        require: true
    },
    botid: {
        type: String,
        require: true,
        unique: true
    },
    logo: {
        type: String,
        require: true
    },
    invite: {
        type: String
    },
    long: {
        type: String,
        require: true
    },
    prefix: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true,
        default: "unverified"
    },
    owners: {
        type: Array,
        require: true
    },
    auth: {
        type: String
    },
    servers: [
        {
            time: {
                type: Date,
                default: () => Date.now()
            },
            servers: {
                type: Number,
                default: 0
            }
        }
    ],
    nsfw: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Bots", botsSchema);