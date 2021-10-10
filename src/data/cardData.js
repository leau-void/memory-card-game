import uniqid from "uniqid";
import { images } from "../assets/mushrooms";

const cardFactory = ({ name, imgSrc }) => ({
  id: uniqid(),
  name,
  imgSrc,
});

const cardData = [];

cardData.push(
  cardFactory({
    name: "Morel",
    imgSrc: images.morel,
  })
);

cardData.push(
  cardFactory({
    name: "Chanterelle",
    imgSrc: images.chanterelle,
  })
);

cardData.push(
  cardFactory({
    name: "Porcini",
    imgSrc: images.porcini,
  })
);

cardData.push(
  cardFactory({
    name: "Blewit",
    imgSrc: images.blewit,
  })
);

cardData.push(
  cardFactory({
    name: "Shaggy Mane",
    imgSrc: images.shaggyMane,
  })
);

cardData.push(
  cardFactory({
    name: "Black Trumpet",
    imgSrc: images.blackTrumpet,
  })
);

cardData.push(
  cardFactory({
    name: "Birch Bolete",
    imgSrc: images.birchBolette,
  })
);

cardData.push(
  cardFactory({
    name: "Lion's Mane",
    imgSrc: images.lionsMane,
  })
);

cardData.push(
  cardFactory({
    name: "Chicken of the Woods",
    imgSrc: images.chickenOfTheWoods,
  })
);

cardData.push(
  cardFactory({
    name: "Reishi",
    imgSrc: images.reishi,
  })
);

cardData.push(
  cardFactory({
    name: "Giant Puffball",
    imgSrc: images.puffball,
  })
);

cardData.push(
  cardFactory({
    name: "Saffron Milk Cap",
    imgSrc: images.saffronMilkCap,
  })
);

export default cardData;
