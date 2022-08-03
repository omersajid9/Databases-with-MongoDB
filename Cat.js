

// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

const {ObjectId} = mongoose.Schema

const catSchema = new mongoose.Schema({
  name: String
});

export mongoose.model("Cat", catSchema)
