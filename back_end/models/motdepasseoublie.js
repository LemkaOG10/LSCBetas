const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const motdepasseoublieSchema = new mongoose.Schema({
        email: { type: String },
        motdepasseoublieToken: { type: String },
        motdepasseoublieExpires: { type: Number },
});

motdepasseoublieSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
});

module.exports = mongoose.model("Motdepasseoublie", motdepasseoublieSchema)