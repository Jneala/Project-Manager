const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Ya gotta have a Title."]
    },
    price: {
        type: Number,
        required: [true, "Ya gotta have a Price."]
    },
    description: {
        type: String,
        required: [true, "Ya gotta have a Description."]
    }

}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;