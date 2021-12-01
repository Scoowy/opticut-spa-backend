import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes";

const app = express();

// Configs
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  const response = {
    status: "OK",
    message: "Welcome to OptiCut-SPA Backend",
  };
  res.json(response);
});

app.use("/products", productsRoutes);

export default app;
