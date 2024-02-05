// server.js

// Importing the required modules
const http = require('http')
const url = require('url')

// Define the port to listen on
const PORT = 3000

// Function to handle routing
function handleRequest (req, res) {
    // Log the request method and URL
    console.log(`${req.method} ${req.url}`)

    // Parse the request URL
    const parsedUrl = url.parse(req.url, true)
    const pathname = parsedUrl.pathname

    // Routing
    if (pathname === '/') {
        handleRootRoute(req, res)
    } else if (pathname === '/about') {
        handleAboutRoute(req, res)
    } else {
        handleNotFoundRoute(req, res)
    }
}

// Function to handle the root route
function handleRootRoute (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Welcome to the homepage!\n')
}

// Function to handle the about route
function handleAboutRoute (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('About page - Project info or creator info goes here.\n')
}

// Function to handle non-existing routes with 404 status code
function handleNotFoundRoute (req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Not Found\n')
}

// Create the HTTP server
const server = http.createServer(handleRequest)

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
