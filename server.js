const express = require("express");
const app = express();
const port = 5000;

app.use(express.json()); //json 형태로 parsing
app.use(express.urlencoded({ extended: false }));

app.get("/api/custommer", (req, res) => {
  res.send([
    {
      id: 1,
      name: "제이크",
      birthday: 19880623,
      gender: "man",
      img: "../public/e8decb977c3a40ab710d98db50f5a45d",
    },
    {
      id: 2,
      name: "맥스",
      birthday: 19980120,
      gender: "man",
      img: "https://mblogthumb-phinf.pstatic.net/20160726_195/gug_468_1469522292574NsPCt_JPEG/500_2.jpg?type=w800",
    },
    {
      id: 3,
      name: "카산드라",
      birthday: 19951104,
      gender: "woman",
      img: "https://mblogthumb-phinf.pstatic.net/MjAxNjEyMDJfNDIg/MDAxNDgwNjM2NTUxMDYw.lBwEWkpWX--JeaKpfHxHkWakP_A9H-PBSBAf2UYx_ZAg._cZjsZkHHa6uD68eZvbU-z8BUjQE_ancYtWNZyiMj40g.JPEG.candle_yt/%EC%9D%B8%EB%AC%BC%EB%B3%B4%EC%A0%95%EB%A6%AC%ED%84%B0%EC%B9%AD-%EB%B8%94%EB%A1%9C%EA%B7%B8.jpg?type=w800",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
