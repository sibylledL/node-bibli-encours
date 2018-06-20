import mongoose from 'mongoose';
const Schema = mongoose.Schema

const livreSchema = new Schema({
  titre:String,
  auteur:String,
  prix:Number,
  isbn:String,
  date:Number,
  couv:String,
  resume:String,
  info:String,
  cat:String
})


const Livre = mongoose.model('Livre', livreSchema)
export { Livre }
