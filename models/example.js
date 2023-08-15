const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    name: {type: String},
    income: {type: Number},
})

module.exports = mongoose.model('Example', exampleSchema);