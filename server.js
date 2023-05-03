const express = require('express');
const http = require('http');
const PORT = process.env.PORT || 3000; //will probably just be port 3000
const app = express();


//Routes
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

//starting the server, 
//delete the test me logs later
app.listen(PORT, function(err){
    if (err) console.log("An error has occured: Error when setting up the server.")
    
    console.log("Server listening on Port", PORT);
    console.log(`Test this on: http://localhost:${PORT}`);
})

