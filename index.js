// 1. import express
var express = require("express");
require("./connection");
const user = require("./model/user");
// 2.Initialization
var app = express();

// middleware
app.use(express.json());
// 3.api
// app.get("path",(req,res)=>{})

app.get("/add", (req, res) => {
  res.send("hello");
});

// to add data to db
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    await user(req.body).save();
    res.send({ message: "data added successfully!!" });
  } catch (error) {
    console.log(error);
  }
});

// to view all the users
app.get("/view", async (req, res) => {
  try {
    const data = await user.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// to delete any user
app.delete("/remove/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    await user.findByIdAndDelete(req.params.id);
    res.send({ message: "deleted" });
  } catch (error) {
    console.log(error);
  }
});

// to update a user
app.put("/edit/:id", async (req, res) => {
  try {
    var data = await user.findByIdAndUpdate(req.params.id, req.body);
    res.send({message:'updated successfully',data})
  } catch (error) {
    console.log(error)
  }
});
// 4.port allocation
app.listen(3000, () => {
  console.log("port is up and running");
});
