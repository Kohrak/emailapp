const mongoose = require('mongoose');
const  { Schema } = mongoose;

const userSchema = new Schema({
      googldeId: String
});

mongoose.model('users', userSchema);
