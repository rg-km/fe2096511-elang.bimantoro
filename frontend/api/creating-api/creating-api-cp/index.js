import express from "express";
import bodyParser from "body-parser";

import booksRoutes from "./routes/books.js";

const app = express();
<<<<<<< HEAD
const PORT = 3000;
=======
const PORT = process.env.PORT || 5000;
>>>>>>> 5f5f82fb629024d2f3529adaacb99bc33ca6b0e1

app.use(bodyParser.json());

app.use("/books", booksRoutes);
app.get("/", (req, res) => res.send("Welcome to the books API!"));
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

const server = app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

export default server;
