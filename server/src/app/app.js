import express from "express";
import mongoose from "mongoose";
import config from "config";

const startApp = async () => {
  const mongoConfig = config.get("mongo");
  mongoose.connect(mongoConfig.uri, mongoConfig.options);

  const app = express();
  app.get("/", (req, res) => res.send("OK"));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`server is running at http://localhost:${PORT}`)
  );
};

export default startApp;
