import { Document, Schema, model, models } from "mongoose";

export interface Itransaction extends Document{
  createdAt : Date;
  stripeId : string;
  amount : string;
  plane : string;
  cridets : string;
  buyer : object;buyerbuyerbuyerbuyerbuyerbuyer
}

const transactionSchema = new Schema({
  createdAt : {type: Date, default: Date.now},
  stripeId : {type: String, required: true,unique: true},
  amount : {type: String, required: true},
  plane : {type: String},
  cridets : {type: String},
  buyer : {type : Schema.Types.ObjectId, ref : 'User'},
})

const Transaction = models?.Transaction || model('Transaction', transactionSchema)

export default Transaction;