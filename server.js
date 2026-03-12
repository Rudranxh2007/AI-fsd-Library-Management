require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const bookRoutes = require("./routes/bookRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

app.use("/api",bookRoutes);

app.get("/",(req,res)=>{
res.send("Library API Running");
});

const PORT = process.env.PORT || 9090;

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});