import { Router } from "express";
import {
  renderIdex,
  newsSave,
  newsDelete,
  apiGradual,
} from "../controllers/news.controllers";

const router = Router();

router.get("/", renderIdex);

router.get("/api", apiGradual);

router.post("/news/add", newsSave);

router.get("/delete/:id", newsDelete);

export default router;
