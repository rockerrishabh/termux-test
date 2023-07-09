import express, { Request, Response } from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
config();

const app = express();

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

// Configure Express
app.set("port", process.env.PORT || 5000);
app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  cookieParser(),
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(express.static("public"));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
