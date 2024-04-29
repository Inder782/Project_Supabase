// server.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

dotenv.config();
const app = express();
const PORT = process.env.PORT;

interface user_data {
  user: String;
  last_name: String;
  age: number;
  email_: String;
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/create", async (req: Request, res: Response) => {
  // create a new user
  const { user, last_name, age, email_ } = req.body;
  console.log(req.body);
  try {
    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        name: user ?? "",
        last: last_name ?? "",
        Age: age ? parseInt(age as string) : undefined,
        email: email_ ?? "",
      },
    });
    console.log("user created ", newUser);
    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: error });
  } finally {
    await prisma.$disconnect();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
  console.log("PORT", process.env.PORT);
});
