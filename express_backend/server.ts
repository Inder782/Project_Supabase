// server.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript & Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
  console.log("PORT", process.env.mong_url);
});
