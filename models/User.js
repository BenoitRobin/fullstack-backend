const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    // unique pour que l'email ne puisse être réutilisé
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true } 
});


// Pour faire en sorte d'avoir une double protection concernant l'email
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);