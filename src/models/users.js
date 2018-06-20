import mongoose from 'mongoose';
const Schema = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema ({
  name:{type: String, index:{ unique:true}},
  password:String
})

const User = mongoose.model('User', userSchema)
export { User }
