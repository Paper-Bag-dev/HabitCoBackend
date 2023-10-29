import  express  from "express";
import userRouter from "./routes/user.js"; 
import taskRouter from "./routes/task.js";
import calendarRouter from "./routes/calendar.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();
config({
    path: "./data/config.env"
})

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
// Using Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);
app.use("/api/v1/calendar", calendarRouter);


app.get("/", (req, res) => {
    res.send("App working");
})
