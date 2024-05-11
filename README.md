# DNA Sequence Validator

### Requirements:

Node.js (Recent version recommended)
npm

### Installation:

1. Download the project ZIP file and extract it to a desired location.
2. Open a terminal window and navigate to the extracted project directory.
3. Install the dependencies: npm install

### Build Project:

Run npm run build from root directory.

### Running the Server:

Start the server:
npm run start
This also automatically runs unit tests, ensuring code quality before running the server.
The server will listen on port 3000 by default.

### Accessing the Application:

Once the server is running, open your web browser and navigate to http://localhost:3000
This will launch the DNA Sequence Validator application in your browser.

### API Endpoints:

/api/validate (POST)
Accepts a JSON body with a sequence property containing the DNA sequence to validate.
Validates the sequence based on the following rules:
Must be an even length string.
Must be composed of valid base pairs: PA, NY, OH, and WV.
Responds with JSON:
{ isValid: true } if valid.
{ isValid: false } if invalid.
Stores the valid sequence in the database (asynchronous).

### Running Tests:

Tests are run automatically every time the server is started but to run them manually run npm run test from the root directory.

### More

This project uses Node (Express) for the server-side API and Vue for an interactive front-end experience. Unit tests are implemented using Mocha to ensure code quality and maintainability. The front-end serves pre-built static files generated from the Vue project.
