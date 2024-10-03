const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },  // Поле для типа пользователя
    rooms: [{ type: String }],  // Список комнат, в которых пользователь находится
    avatarUrl: { type: String },  // URL of the user's avatar
    bio: { type: String }  // Short bio or description
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
