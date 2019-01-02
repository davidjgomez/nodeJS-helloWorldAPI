/* 
 * Hello World API
 */

// Dependencies
const http = require('http')
const url = require('url')

// Instantiate the HTTP server
const server = http.createServer((req, res) => {
    
    // Get the URL and parse it
    const parsedUrl = url.parse(req.url, false)

    // Get the trimmed path
    const trimmedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g, '')

    // Does not process any sent data
    req.on('data', () => {})

    // Process the request based on the route
    req.on('end', () => {
        
        // Choose the handler this request should go to. If one is not found, use the Not Found handler
        const chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound

        // Route the request to the handler specified in the router
        chosenHandler((statusCode, payload) => {
            // Use the status code called back by the handler, or default to 200
            statusCode = typeof(statusCode) == 'number' ? statusCode : 200

            // Use the payload called back by the handler, or default to an empty object
            payload = typeof(payload) == 'object' ? payload : {}

            // Convert the payload to a string
            const payloadString = JSON.stringify(payload) 

            // Return the response
            res.setHeader('Content-Type', 'application/json')
            res.writeHead(statusCode)
            res.end(payloadString)  
            
            // Log the request path
            console.log('Returning this response: ', statusCode, payloadString)
        })
    })
})

// Start the HTTP server
server.listen(3000, () => console.log('The server is listening on port 3000'))

// Define the handlers
const handlers = {}

// Hello handler
handlers.hello = callback => callback(200, { 'message' : 'Hello! Thanks for saying hi!' })

// Not Found handler
handlers.notFound = callback => callback(404, { 'message' : 'Don\'t be so impolite next time and say hello first!' })

// Define a request router
const router = { 'hello' : handlers.hello }
