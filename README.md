# Simple HTTP Server in Node.js

This project implements a basic HTTP server using Node.js that handles web requests. It includes routing for two routes (/ and /about), error handling for non-existing routes, and logging of request method and URL.

## Setup and Usage

1. **Clone the Repository:**
    ```
    git clone https://github.com/jiviglianco/Simple-HTTP-server.git
2. **Navigate to the Project Directory:**
    ```
    cd simple-HTTP-server
3. **Install Dependencies:**
There are no external dependencies for this project.

4. **Run the Server:**
    ```
    node server.js
5. **Access the Server:**
Open your web browser and visit the following URLs:
- `http://localhost:3000` : Homepage displaying a welcome message.
- `http://localhost:3000/about` : About page displaying project or creator info.
- Any other URL will result in a 404 Not Found response.

## File Structure

- `server.js`: Contains the implementation of the HTTP server.
- `README.md`: This file providing information about the project.
