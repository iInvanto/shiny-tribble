import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5010;

app.get("/api/data", (req: Request, res: Response) => {
  res.send({ message: "Hello from Node.js Express with TypeScript!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
