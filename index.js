// Set up app
// requiring express
const express = require('express');
// initialize the express app
const app = express();
// specifying the port to listen on
const port = 8080;

// API / urls
// default:
app.get('/', (req, res) => {

    // send index file
    // note: I hope sending a file instead of JSON data is okay! I wanted to add styling to the assignment as well as buttons to the two API endpoints :-)
    res.sendFile('index.html');
});

// Honey badgers API route
app.get('/api/honey-badgers', (req, res) => {
    // honey badger fun facts
    const badgersFunFacts = [
        "They will eat anything (just like students going through midterms).", "They are very, very mean. Honey badgers have already been seen fighting lions.", 
        "They are solitary animals.", 
        "They have very sharp, strong teeth. They can break through metal locks.",
        "They have a very thick skin. About as thick as a buffalo's.",
        "They are born blind and hairless.",
        "They are very smart and have often been filmed using homemade tools to escape enclosures.",
        "They attack back when hunted.",
        "They love to dig holes. They then live in a network of underground tunnels to evade predators.",
        "The age at which younglings separate from their mother is completely arbitrary. Some separate after a few months, while others enjoy the company of their mom up to a few years."
    ];

    // title of page and fun fact list's opening tag
    let formattedHTML = "<h1>Here are 10 fun facts concerning Honey Badgers:</h1><ol>";

    // format the fun fact list to display it as HTML
    for (let i = 0; i < badgersFunFacts.length; i++) {
        formattedHTML += "<li>" + badgersFunFacts[i] + "</li>";
    }

    formattedHTML += "<p>Source: https://tandatula.com/blog/posts/10-fun-facts-for-kids-about-honey-badgers/</p>";

    // add the closing list tag
    formattedHTML += "</ol>";

    // send the formatted HTML to be displayed on the webpage
    res.send(formattedHTML);
});

// run the express http server on the port we specified
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});