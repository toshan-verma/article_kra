"use strict";
import mongoose from 'mongoose';

/**
 * @fileoverview This module establishes a connection to the MongoDB database using Mongoose.
 * It exports the Mongoose instance for use in other parts of the application.
 */

/**
 * Mongoose connection options.
 * @type {mongoose.ConnectOptions}
 * @property {number} serverSelectionTimeoutMS - Timeout in milliseconds for server selection.
 */
const options: mongoose.ConnectOptions = {
    serverSelectionTimeoutMS: 5000, // Example option for server selection timeout
};

/**
 * Connect to the MongoDB database.
 * @async
 * @function
 * @returns {Promise<void>} Resolves when the connection is successful, rejects on error.
 */
mongoose.connect("mongodb://127.0.0.1:27017/article_db", options)
    .then(() => console.log('Connected to Database'))
    .catch((error) => console.error('Database connection error:', error));

/**
 * Mongoose database connection instance.
 * @type {mongoose.Connection}
 */
const db = mongoose.connection;

/**
 * Event listener for database connection errors.
 * @event mongoose.Connection#error
 * @param {Error} error - The error object.
 */
db.on('error', (error) => console.error(error));

/**
 * Event listener for successful database connection.
 * @event mongoose.Connection#open
 */
db.once('open', () => console.log('Database connection is open'));

/**
 * Export the Mongoose instance for use in other modules.
 * @module mongoose
 */
export default mongoose;

// Uncomment the following line to export ObjectId if needed
// export const ObjectId = mongoose.Types.ObjectId;