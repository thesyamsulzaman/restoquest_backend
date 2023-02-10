const express = require("express");
const cors = require("cors");
const app = express();
const dummy = require("./dummy");

const PORT = 3000;

app.use(cors());
app.get("/", (req, res) => {
  res.json({
    message: "hello",
  });
});

app.get("/list", (req, res) => {
  res.json(dummy);
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  const restaurant = dummy.restaurants.find(
    (restaurant) => restaurant.id === id
  );

  res.json({
    error: false,
    message: "success",
    restaurant: {
      ...restaurant,
      categories: [
        {
          name: "Sop",
        },
        {
          name: "Modern",
        },
      ],
      menus: {
        foods: [
          {
            name: "Kari kacang dan telur",
          },
          {
            name: "Ikan teri dan roti",
          },
          {
            name: "roket penne",
          },
          {
            name: "Salad lengkeng",
          },
          {
            name: "Tumis leek",
          },
          {
            name: "Salad yuzu",
          },
          {
            name: "Sosis squash dan mint",
          },
        ],
        drinks: [
          {
            name: "Jus tomat",
          },
          {
            name: "Minuman soda",
          },
          {
            name: "Jus apel",
          },
          {
            name: "Jus mangga",
          },
          {
            name: "Es krim",
          },
          {
            name: "Kopi espresso",
          },
          {
            name: "Jus alpukat",
          },
          {
            name: "Coklat panas",
          },
          {
            name: "Es kopi",
          },
          {
            name: "Teh manis",
          },
          {
            name: "Sirup",
          },
          {
            name: "Jus jeruk",
          },
        ],
      },
      customerReviews: [
        {
          name: "Ahmad",
          review: "Tidak ada duanya!",
          date: "13 November 2019",
        },
        {
          name: "Arif",
          review: "Tidak rekomendasi untuk pelajar!",
          date: "13 November 2019",
        },
        {
          name: "Gilang",
          review: "Tempatnya bagus namun menurut saya masih sedikit mahal.",
          date: "14 Agustus 2018",
        },
      ],
    },
  });
});

app.listen(PORT, () => {
  console.log(`[server] running on ${PORT}`);
});
