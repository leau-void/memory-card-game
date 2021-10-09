import uniqid from "uniqid";

const cardFactory = ({ name, imgSrc }) => ({
  id: uniqid(),
  name,
  imgSrc,
});

const cardData = [];

cardData.push(
  cardFactory({
    name: "Morel",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Chanterelle",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "King Bolete",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Blewit",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Shaggy Mane",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Black Trumpet",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Birch Bolete",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Lion's Mane",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Chicken of the Woods",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Reishi",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Giant Puffball",
    imgSrc: null,
  })
);

cardData.push(
  cardFactory({
    name: "Saffron Milk Cap",
    imgSrc: null,
  })
);

export default cardData;
