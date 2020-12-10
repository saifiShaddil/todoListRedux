const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// const server = require('http').server(app);
// const io = require('socket.io').server();
const app = express();

app.use(cors());
app.use(express.json());


// io.on('connect', console.log("New User connected"));


//cluster url = mongodb+srv://shaddil:shaddil@webapi.yygqs.gcp.mongodb.net/test?retryWrites=true&w=majority
// database connection config
const uri = "mongodb://localhost:27017/beSocial";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database Connected.");
});

// api routes
app.get("/api", (req, res) => {
  res.send("Welcome");
});

//  routers 
const messageRouter = require('./routes/message.route')
const userRouter = require('./routes/user.route')

app.use("/api/user", userRouter) 
app.use("/api/messages", messageRouter)

const port = process.env.PORT || 3500;

app.listen(port, () => console.log(`Listening to API Request at ${port}`));
