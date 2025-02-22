const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 3000;
require('dotenv').config()

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

//Getting all routes
const patient = require("./routes/patientRoutes")
const user = require("./routes/user")

app.use("/api/patient", patient);
app.use("/api/user", user);

//Connecting DB
const connectDB = require("./connect");
connectDB("mongodb://localhost:27017/vitaGenix").then(() => {
    console.log("DataBase Connected")
})

app.get("/", async (req, res)=>{
    return res.json({success: true, message: "Api Working"})
})

app.listen(port, () => {
    console.log("Server Started at PORT " + port)
})
