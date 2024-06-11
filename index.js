const express = require('express');
const app = express();
const port = 5005;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for the webhook
app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.sendStatus(200); // Respond with 200 OK
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
