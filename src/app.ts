import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes/index.routes";

const app = express();

// Configs
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(routes);

export default app;
