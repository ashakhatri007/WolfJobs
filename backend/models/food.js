const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
    Food: {
        type: String,
        required: true
    },
    Calories: {
        type: String,
        
    }
  
});


const Food = mongoose.model('Food', foodSchema);

module.exports = Food;