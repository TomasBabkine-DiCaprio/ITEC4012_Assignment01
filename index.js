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
    // Home page
    const title = "<h1>Tomas Babkine-Di Caprio - ITEC 4012 - Assignment 01<br>101124714</h1>";

    // format html
    let formattedHTML = title;
    // send the formatted HTML to be displayed on the webpage
    res.send(formattedHTML);
});

// run the express http server on the port we specified
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});