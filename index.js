import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser'

import pageRoute from "./routes/pageRoute.js";

dotenv.config();

const app = express();
const url = http.createServer(app)

app.set("view engine","ejs")
app.use(express.static("public"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser())

const PORT = process.env.PORT || 3000;

app.use("/",pageRoute);

url.listen(PORT,function (req,res) {
    console.log(`${ PORT} portu dinleniyor`);
})