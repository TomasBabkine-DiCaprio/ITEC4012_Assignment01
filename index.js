//Set up app
// requiring express
const express = require('express');
// initialize the express app
const app = express();
// specifying the port to listen on
const port = 8080;

// API / urls
// default:
app.get('/', (req, res) => {
    res.send("Hi, the express server is running.");
});

// run the express http server on the port we specified
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});