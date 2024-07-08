// clerkId, email, username, photo, firstName, lastName, planeId, creditBalance

import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document{
  clerkId : string;
  email : string;
  username : string;
  photo : string;
  firstName : string;
  lastName : string;
  planeId : number;
  creditBalance : number;
}

const userSchema = new Schema({
  clerkId : {type: String, required: true, unique: true},
  email : {type: String, required: true, unique: true},
  userName : {type: String, required: true, unique: true},
  photo : {type: String, required: true},
  firstName : {type: String},
  lastName : {type: String},
  planeId : {type: Number, default: 1},
  creditBalance : {type: Number, default: 10},
})

const User = models?.User || model("User", userSchema);

export default User;