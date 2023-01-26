const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./connect");
const Login = require("./Router/User");
const Blog = require("./Router/blog");

dotenv.config();
db();
const app = express();
app.use(cors());
app.use(express.json());

/////
app.use("/", Login);
app.use("/blog", Blog);

//PORT
app.listen(process.env.PORT || 5000);
