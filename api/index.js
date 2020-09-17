/**
 * Required External Modules
 */
const express = require('express');
const path = require('path');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || '8000';

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
    res.status(200).send('Hello Node :)');
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Jammin on port ${port}`);
});
