import mongoose from "mongoose";
import app from "./app.js";

const DB_HOST =
  "mongodb+srv://teoss902:xkKBIwruXEsbxM1a@cluster0.q6r4guo.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// cQHyeQ6WNQDJrKPU
