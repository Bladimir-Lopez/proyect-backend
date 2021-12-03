const { Schema, model} = require('mongoose');
const UsersSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true},
    apellido_p: {
        type: String,
        required: true,
        trim: true},
    apellido_m: {
        type: String,
        required: true,
        trim: true},
    user: {
        type: String,
        required: true,
        trim: true,
        unque:true},
    password: {
        type: String,
        required: true},
    rol:{
        type: String,
        required: true}
})   
module.exports = model('Users',UsersSchema);