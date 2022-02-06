import app from "./app";
import config from "./config/config";

// Up Server
app.listen(config.PORT, () => {
  console.log(`OptiCut-SPA Backend listening at port ${config.PORT}`);
});
