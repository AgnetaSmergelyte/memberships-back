const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

const post = mongoose.model("cao-services", servicesSchema);
module.exports = post;