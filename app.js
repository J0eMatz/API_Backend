require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const app = express()
const port = process.env.PORT || 3000
const routes = require("./src/routes/index")
const db = require("./src/utils/db")
const cors = require('cors');

db.connect()
app.use(cors());
app.use(express.json())

app.use(morgan("dev"))

app.use("/", routes)

app.use((resp, req, res, next)=>{
    //res.status(resp.status).send(resp.send)
    res.status(resp.status).send(resp.send).token(resp.token)
})

app.listen(port,()=>{
    console.log(`Server is listening in port ${port}`)
})