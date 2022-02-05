import express from "express";
import morgan from "morgan";
import cors from "cors";

import config from "./config";

import routes from "./routes/index.routes";

const app = express();

// Configs
app.set("port", config.PORT);

// Middlewares
app.use(
  cors({
    origin: config.CORS_ORIGIN,
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(routes);

export default app;
