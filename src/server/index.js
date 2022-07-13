require("dotenv").config();
const express = require("express");
const { PORT } = require("../config");
const upload = require("../services/storage");
const uploadService = require("../services/upload");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/uploads", upload.single("file"), async (req, res) => {
  const result = await uploadService.upload(req?.file);

  return res.json({
    message: "done",
    data: result,
  });
});

app.listen(PORT);
