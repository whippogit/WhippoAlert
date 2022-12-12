import express from "express";
import { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";
import multer from "multer";
import cors from "cors";

const app = express();

app.set("views", path.join(__dirname, "./views"));
app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

//multer configuration
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) =>
    cb(null, new Date().getTime() + path.extname(file.originalname)),
});

app.use(multer({ storage }).single("photo"));

//routes
app.use(indexRoutes);

export default app;
