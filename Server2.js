const express = require('express');
const app = express();
const path = require('path');

// Set the port for the server
const port = 3000;

// Serve the APK file
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'app-release.apk');
  console.log(filePath)
  res.download(filePath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
