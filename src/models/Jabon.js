const { Schema, model } = require('mongoose');
const jabonSchema = new Schema({
    cantidad: {
        type: String,
        required: true},
    contador: {
        type: String,
        required: true},
    date:{
        type: Date,
        default: Date.now}},{
    timestamps: true
});
module.exports = model('jabon', jabonSchema);