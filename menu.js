
/* ===== 1. The menu as data ===== */

const dishes = [
  {
    name: "Falafel",
    description: "Chickpea, herbs, and spices",
    price: 10,
    image: "falafel.jpeg",
    alt: "A falafel"
  },
  {
    name: "Pasta Salad",
    description: "Lettuce, vegetables, and mozzarella",
    price: 12,
    image: "salad.jpeg",
    alt: "A pasta salad"
  },
  {
    name: "Dubai Chewy Cookie",
    description: "Chewy cookie with chocolate and pistachio",
    price: 8,
    image: "dubai cheewy.jpeg",
    alt: "Dubai chewy cookie with pistachio filling"
  },
  {
    name: "Chocolate Pistachio",
    description: "Chocolate with creamy pistachio filling",
    price: 9,
    image: "chocolate pistachio.jpeg",
    alt: "Chocolate pistachio dessert"
  }
];

/* ===== 2. Format the price ===== */

function priceLabel(price) {
  return "$" + price;
}

/* ===== 3. Create a menu card ===== */

function makeCard(dish) {
  const card = document.createElement("div");
  card.classList.add("dish");

  const photo = document.createElement("img");
  photo.src = dish.image;
  photo.width = 240;
  photo.height = 135;
  photo.alt = dish.alt;

  const name = document.createElement("h2");
  name.textContent = dish.name;

  const description = document.createElement("p");
  description.textContent = dish.description;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = priceLabel(dish.price);

  card.append(photo, name, description, price);

  return card;
}

/* ===== 4. Create a price table row ===== */

function makeRow(dish) {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = dish.name;

  const priceCell = document.createElement("td");
  priceCell.textContent = priceLabel(dish.price);

  row.append(nameCell, priceCell);

  return row;
}

/* ===== 5. Display all dishes ===== */

const dishList = document.querySelector("#dishes");
const priceList = document.querySelector("#price-list");

for (const dish of dishes) {
  dishList.append(makeCard(dish));
  priceList.append(makeRow(dish));
}