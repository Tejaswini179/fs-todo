const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/todo");
};
const userSchema = new mongoose.Schema(
  {
    username : {type:String,required:true},
    password: {type:String,required:true},
    contactno:{type:String, required:true}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const User = mongoose.model("user", userSchema);

// crud section

// app.get("/user", async (req, res) => {
//   try {
//     const user = await User.find().lean().exec();
//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

app.post("/register", async (req, res) => {
  try {
    // const user = await User.create(req.body);
    // return res.status(201).send(user);
    const {username, password, contactno} = req.body;
    let user = await User.findOne({contactno}).exec()
    if(user){
        res.status(400);
        res.json({
            message:"contact Number already exists"
        });
        return;
    }
    await User.create({username, password, contactno});
    res.json({
        message:"success"
    })
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.listen(4000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }
  console.log("listen to the port 4000");
});
