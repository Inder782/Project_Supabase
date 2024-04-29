import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket server logic
wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected");

  // Handle messages from the client
  ws.on("message", (message: string) => {
    console.log("Received message:", message.toString());

    // Echo the received message back to the client
    ws.send(`Echo: ${message}`);
  });

  // Handle disconnection
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("You are here my friend");
});
