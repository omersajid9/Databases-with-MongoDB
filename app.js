

const mongoose = require('mongoose');





mongoose.connect('mongodb://127.0.0.1:27017/test', { ssl:false}).then(()=>console.log("connected to mongodb")).catch(error=>console.log(error));




// const {ObjectId} = mongoose.Schema;
// const { Schema } = mongoose;
//
//
const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: Number
});
//
const User = mongoose.model("User", userSchema);
// //
const John = new User({_id:1, name: 'John', age:37});
const Ben = new User({_id:2, name: 'Ben', age:17});
// kitty.markModified([{name: 'Taha'}]);

// Cat.insertOne({name: 'Taha'});
John.save();
Ben.save();



console.log("DB connected");
