// src/index.ts
import express,{ Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;
import userRouter from "./routes/userRouter"

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/users", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
