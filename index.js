const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/download-pdf", async (req, res) => {
  try {
    const apiResponse = await axios.get(
      "https://gita-api.vercel.app/tel/verse/1/1",
      {
        responseType: "arraybuffer",
      },
    );
    console.log(apiResponse.data.toLocaleString());
    res.send(apiResponse.data.toLocaleString());
  } catch (error) {
    console.error("Error downloading PDF:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
