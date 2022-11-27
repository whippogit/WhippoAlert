import News from "../models/news";
import cloudinary from "cloudinary";
import * as dotenv from "dotenv";
import fs from "fs-extra";
import alert from "alert";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const renderIdex = async (req, res) => {
  const news = await News.find().lean();
  res.render("index", { news });
};

export const apiGradual = async (req, res) => {
  const news = await News.find()
    .then((news) => res.json(news))
    .catch((error) => res.json(error));

  res.end(news);
};

export const newsSave = async (req, res) => {
  if (req.file.size < 10000000) {
    const photo = await cloudinary.v2.uploader.upload(req.file.path);

    const newNews = new News({
      image_url: photo.url,
      image_id: photo.public_id,
      category: req.body.category,
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      Date: photo.created_at,
    });
    await newNews.save();

    res.redirect("/");
  } else {
    alert("El archivo excede el tamaño permitido");
  }

  await fs.unlink(req.file.path);
};

export const newsDelete = async (req, res) => {
  const { id } = req.params;
  await News.findByIdAndDelete(id);
  res.redirect("/");
};
