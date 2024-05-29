import mongoose from "mongoose";
const messageschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const message = mongoose.model("Message", messageschema);
export default message;
