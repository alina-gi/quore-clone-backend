const mongoose = require('mongoose');
const answerSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        answer: {
            type: String,
            required: true,
            unique:true
        },

        category:{
            type:String,
            required: true,
            unique:true
        }
    }
)
const Answer = mongoose.model('answers', answerSchema);
module.exports = Answer;