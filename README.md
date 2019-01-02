# Hello World API

This is the assignment 1 for Pirple's NodeJS Master Class

## Requirements

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 

## Solution

1. A simple server listening on port 3000
2. Responds with a welcoming message when requesting to /hello
3. Responds with a no so welcoming message otherwise
4. Just uses the _http_ and _url_ libraries due to the simple requirements
5. Does not process any sent query strings but is capable to recognize the /hello request in these cases too
5. Does not process any sent payload or headers

## Instructions

Just run it with _node index.js_ and do some requests to _localhost:3000_ with _/hello_ and something else as well
