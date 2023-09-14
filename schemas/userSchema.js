const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    service_id: {
        type: String,
        required: true
    }
})

const post = mongoose.model("cao-users", userSchema);
module.exports = post;