const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://kasim:kasim@ijazd.3fzhiek.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=ijazdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.get("/",(req,res) =>{
  console.log("connected to databasee")
   res.send('server is runnning')
})

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email} );
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // const hashedPassword = await bcrypt.hash(password);
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error creating user" });
  }
});


// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) { 
//       return res.status(401).json({ message: "Invalid email" });
//     }
//     if (user.password !== password) {
//       return res.status(401).json({ message: "Invalid password" });
//     }
//     const token = jwt.sign({ userId: user._id }, "mysecretkey", { expiresIn: "100y" });
//     res.json({ token });
//     console.log('login successful')

//     console.log({name, email, password});
//   } catch (err) {
//     console.error(err); // Log the error
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });


app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ message: "Invalid name" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, "mysecretkey", { expiresIn: "100y" });
    res.json({ token });
    console.log('login successful')

    console.log({ email, password});
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).json({ message: "Internal Server Error" });
  }
});



const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
