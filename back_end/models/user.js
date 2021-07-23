var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({

    email: { type: String },
    password: { type: String },
    pseudo: { type: String },

    discord: {
        username: { type: String },
        discriminator: { type: String },
        id_discord: { type: String },
        avatar: { type: String },
    },

    grade: {
        fondateur: { type: Boolean },
        administrateur: { type: Boolean },
        moderateur: { type: Boolean },
        recruteur: { type: Boolean },
    },
    
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email',
});

module.exports = mongoose.model("User", userSchema);