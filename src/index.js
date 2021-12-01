import app from "./app";

// Up Server
app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${app.get("port")}`);
});
