import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookroute from './route/book.route.js'
import userroute from "./route/user.route.js"
import messageroute from "./route/message.roue.js"
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT=process.env.PORT ||4001;
const URI=process.env.MongoDBURI;
try{
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("connected to mongodb");

} catch(error){
 console.log("error :",error);
}
app.use("/book",bookroute)
app.use("/user",userroute);
app.use("/message",messageroute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})