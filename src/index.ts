import app from "./app";

// Up Server
app.listen(app.get("port"), () => {
  console.log(`OptiCut-SPA Backend listening at port ${app.get("port")}`);
});
