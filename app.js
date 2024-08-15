const express = require('express');
const bodyParser = require('body-parser');
const { KoreAI } = require('kore.ai');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Initialize Kore.ai SDK
const koreAiClient = new KoreAI({
  authToken: 'YOUR_AUTH_TOKEN', // replace with your real token
});

// Endpoint to handle chatbot requests
app.post('/api/chatbot', async (req, res) => {
  try {
    const { userMessage } = req.body;
    const response = await koreAiClient.sendMessage(userMessage);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
