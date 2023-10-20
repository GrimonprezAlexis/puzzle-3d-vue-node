import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import routes from "./src/routes/routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

mongoose.connect("mongodb://localhost/puzzle3d", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
