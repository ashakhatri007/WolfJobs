const mongoose = require('mongoose');


const historySchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    caloriesgain: {
        type: Number, 
        default:0
    },
    caloriesburn:{
        type:Number,
        default:0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

  
});


const History = mongoose.model('History', historySchema);

module.exports = History;