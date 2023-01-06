import News from "../models/news";
import * as dotenv from "dotenv";

dotenv.config();

export const renderIdex = async (req, res) => {
  const news = await News.find().lean();
  res.render("index", { news });
};

export const apiGradual = async (req, res) => {
  const news = await News.find();

  res.send({ status: "ok", results: news });
};

export const newsSave = async (req, res) => {
  const newNews = new News({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
  });
  await newNews.save();

  res.redirect("/");
};

export const newsDelete = async (req, res) => {
  const { id } = req.params;
  await News.findByIdAndDelete(id);
  res.redirect("/");
};
