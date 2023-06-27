let express = require("express");
let mongoose = require("mongoose");
let adminRouter = require("./views/adminRouter");
var cors = require("cors");

let app = express();
let port = 8080;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(adminRouter);

app.use("*", (req, res) => {
  res.status(400).json({ message: "no router is present" });
});

mongoose
  .connect(
    "mongodb+srv://shiek421:16pA5A0421@cluster0.vqezsdq.mongodb.net/Data_base1?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server  stars ${port}`);
});
