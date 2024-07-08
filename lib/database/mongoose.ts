import mongoose, {Mongoose} from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection{
  conn : Mongoose | null;
  promise : Promise<Mongoose> | null;
}

let chashed : MongooseConnection = (global as any).mongoose
if(!chashed){
  chashed = (global as any).mongoose ={
    conn : null, promise:null
  }
}

export const connectToDatabase = async () =>{
  if(chashed.conn) return chashed.conn;
  if(!MONGODB_URL) throw new Error("Missing MONGODB_URL")
  
  chashed.promise = chashed.promise || mongoose.connect(MONGODB_URL,
    { dbName : "Imaginify", 
      bufferCommands : false
    })
    chashed.conn = await chashed.promise;
    return chashed.conn;
}