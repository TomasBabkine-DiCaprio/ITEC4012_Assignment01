//Set up app
// requiring express
const express = require('express');
// initialize the express app
const app = express();
// specifying the port to listen on
const port = 8080;

// CSS 
app.use(express.static("public"));

// API / urls
// default:
app.get('/', (req, res) => {

    // send index file
    // note: I hope sending a file instead of JSON data is okay! I wanted to add styling to the assignment as well as buttons to the two API endpoints :-)
    res.sendFile('index.html');
});

// run the express http server on the port we specified
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});