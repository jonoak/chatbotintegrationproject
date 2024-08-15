# Chatbot Integration Project

This project demonstrates the integration of a chatbot using the Kore.ai platform. It includes a simple Express application that handles requests from a user and sends them to the Kore.ai chatbot for processing.

## Requirements
- Node.js (>=12.x)
- NPM
- An account on Kore.ai to obtain `AUTH_TOKEN`

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd chatbot-integration
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your Kore.ai token**:
   Replace `YOUR_AUTH_TOKEN` in the `app.js` file with your actual Kore.ai authentication token.

4. **Start the server**:
   ```bash
   npm start
   ```

5. **Test the chatbot**:
   You can use tools like Postman to send POST requests to `http://localhost:3000/api/chatbot` with the following JSON body:
   ```json
   {
     "userMessage": "Hello"
   }
   ```
   You should get a response from the chatbot.

## Features
- Uses Express.js for API handling.
- Integrates with Kore.ai to process user messages.
- Simple error handling for API requests.

## Contributing
Feel free to submit issues or pull requests to improve the project!

## License
This project is open source and available under the MIT License.