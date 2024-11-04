const express = require('express');
const morgan =require("morgan");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/authRouter.js')

const app  = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"))

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

app.use("/api" , authRouter);

app.listen(process.env.PORT || 4000, () => {
    console.log(`sever running on port 4000`);
})