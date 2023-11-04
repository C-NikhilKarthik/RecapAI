const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keysecret = process.env.SECRET_KEY;

const UserSchema = new Schema({
    UserName: {
        type: String,
        unique: true, // Make UserName field unique
    },
    EmailId: {
        type: String,
        unique: true, // Make EmailId field unique
    },
    Password:{
        type: String,
        required: true,
    },
    history: {
        type: [String],
        default: [] // Set an empty array as the default value
    }
}, { collection: 'user_details' });

// Hashed password
UserSchema.pre("save", async function (next) {
    if (this.isModified("Password")) {
        this.Password = await bcrypt.hash(this.Password, 12);
    }
    next();
});

// Token generation
UserSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({ token });
        await this.save();
        return token;
    } catch (error) {
        throw error;
    }
}

const User = mongoose.model('User', UserSchema);
module.exports = User;
