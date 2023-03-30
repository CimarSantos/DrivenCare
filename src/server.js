import express from "express";
import cors from "cors";
import chalk from "chalk";
import routes from "./Routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(chalk.cyan(`Server runnig in port ${port}`));
});
