// server.js
// Feature addition: introduce Express.js and expose a second endpoint ("Good evening")
// alongside the original "Hello world" endpoint. CommonJS is used (no build/transpile step).

const express = require('express');

const app = express();
// Port is configurable via the PORT env var; defaults to 3000 (no port is mandated by spec A-004).
const PORT = process.env.PORT || 3000;

// Feature F-002 (preserved): GET /hello returns the exact literal "Hello world".
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

// New feature (per user request): GET /good-evening returns the exact literal "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Feature F-001: bind the HTTP listener to the configured port.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
