// 1.import mongoose
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://user1:SHGxhrdz7VZVWYx6@cluster0.1qg89hd.mongodb.net/OpenBatchdb1?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });
