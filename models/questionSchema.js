const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        question: {
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
const Question = mongoose.model('questions', questionSchema);
Question.createIndexes();
module.exports = Question;