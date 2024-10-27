// src/index.ts
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userRouter = require("./routes/userRouter.mjs");

import { Request, Response } from "express";


app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/users", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
