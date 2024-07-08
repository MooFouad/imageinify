import { url } from "inspector";
import { Schema, model, models, Document } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  hieight?: number; 
  config?: object;
  transformationUrl?: URL; 
  aspectRatio?: string;
  color?: string;
  prompet?: string; 
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt: Date;
  updatedAt: Date;
}


const imageSchema = new Schema({
  title : {type: String, required: true},
  transformationType : {type: String, required: true},
  publicId : {type: String, required: true},
  secureUrl : {type: URL, required: true},
  width : {type : Number},
  hieight : {type: Number},
  config : {type: Object},
  transformationUrl :{type : URL},
  aspectRatio : {type : String},
  color : {type : String},
  prompet : {type : String},
  auther : {type : Schema.Types.ObjectId, ref : "User"},
  createdAt : {type : Date, default : Date.now},
  updatedAt : {type : Date, default : Date.now},
})

const Image = models?.Image || model('Image', imageSchema)

export default Image;