import messag from "../model/message.model.js";
export const mess = async (req, res) => {
  console.log("controller working");
  try {
    const { name, email, message } = req.body;
    const createnewmessage = new messag({
      name: name,
      email: email,
      message: message,
    });
   const savedm =await createnewmessage.save();
    res.status(201).json({message: "message submitted",
      messa: {
        _id: savedm._id,
        name: savedm.name,
        message: savedm.message,
      },
    });
  } catch (error) {
    console.log("error:" + error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

