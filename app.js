const mongoose = require('mongoose');
const url = "mongodb+srv://Arnold:action1234@cluster0-3yhpt.mongodb.net/test?retryWrites=true&w=majority";
console.log(url);

mongoose.connect(url, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

var kittySchema = new mongoose.Schema({
   name: String
 });
// creating a model
 var Kitten = mongoose.model('Kitten', kittySchema);

// creating new kitten object with property new name
 var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

var fluffy = new Kitten({ name: 'fluffy' });

fluffy.save(function (err, fluffy) {
   if (err) return console.error(err);
   console.log('fluffy');
 });
