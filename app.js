require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// Middleware: also use for authentication
app.use(cors()); // this gives access to this to every domain, closing the cross origin resource sharing
app.use(express.urlencoded());
app.use(express.json());

// import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to db
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(8000, () => {
      console.log("Server listening on port 8000");
    });
  })
  .catch((err) => console.log(err));

// fetch('http://localhost:8000/posts')
// .then(result=>{
//   return result.json()
// })
// .then(data=>{
//   console.log(data)
// }) Use this code in javascript for getting and using the api
