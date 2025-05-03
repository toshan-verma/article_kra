import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json())

app.use(routes);

app.listen(3002, () => console.log('Server Started at http://localhost:3002'))