import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";
// const morgan = require('morgan');
import log from './utils/log';
// const requestLogger = require('./middleware/requestLogger');
// const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();
require('./models/index'); // Import models to ensure they are registered with mongoose

const app = express();

// Middleware
// // app.use(express.json());
// app.use(requestLogger);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json())

// // Use the 'combined' format for detailed logs (remote IP, method, URL, status, etc.)
// app.use(morgan('combined'));

app.use(routes);

// Error Handling Middleware (must be after routes)
// app.use(errorHandler);

app.listen(3002, () => console.log(`Server running on port 3002`));