var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionnaire = new Schema({

    questionnaire: {
        reussi: {type: Boolean},
        score: {type: Number},
    },
    
});

module.exports = mongoose.model("Questionnaire", questionnaire);