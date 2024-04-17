// server.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { users } from "./mock_data";
import { connectTodb } from "./lib/actions/mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectTodb();
app.get("/", (req: Request, res: Response) => {
  const { username, pwd } = req.headers;

  const foundUser = users.find((user) => user.username === username);

  if (foundUser) {
    res.status(200).json({ message: "User does exist" });
  } else {
    res.status(404).json({ message: "Username does not exist" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
  console.log("PORT", process.env.PORT);
});
