// Calling Elements
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 12;

// Linking text
playerLivesCount.textContent = playerLives;

//Generate Cards
const getData = () => [
  { imgSrc: "./cards/alec-favale-nzPOHL2pD_g-unsplash.jpg", name: "llama" },
  { imgSrc: "./cards/alex-v-ujcmPPxhxT8-unsplash.jpg", name: "zebra" },
  { imgSrc: "./cards/andy-chilton-yZLkK1XfyHg-unsplash.jpg", name: "owl" },
  { imgSrc: "./cards/benjamin-wong-_T633k1Ly7A-unsplash.jpg", name: "monkey" },
  { imgSrc: "./cards/edgar-nKC772R_qog-unsplash.jpg", name: "kitten" },
  {
    imgSrc: "./cards/guillermo-casales-LQfcolSv2M0-unsplash.jpg",
    name: "bunny",
  },
  { imgSrc: "./cards/janko-ferlic-p8GrLz4H4CA-unsplash.jpg", name: "bear" },
  { imgSrc: "./cards/joy-christian-nhHx-_zsesc-unsplash.jpg", name: "puppy" },
  { imgSrc: "./cards/kerin-gedge-JDzoTGfoogA-unsplash.jpg", name: "duck" },
  { imgSrc: "./cards/kerin-gedge-P3sEj29SHD8-unsplash.jpg", name: "koala" },
  {
    imgSrc: "./cards/maurits-bausenhart-Ay67yB6vmF8-unsplash.jpg",
    name: "elephant",
  },
  {
    imgSrc: "./cards/mitchel-lensink-TNnJbUv25ck-unsplash.jpg",
    name: "turtle",
  },
  {
    imgSrc: "./cards/nikolay-tchaouchev-ZtWCfStISI4-unsplash.jpg",
    name: "fox",
  },
  { imgSrc: "./cards/onur-binay-E18nZ_OHh04-unsplash.jpg", name: "cat" },
  {
    imgSrc: "./cards/redcharlie-redcharlie1-gQMWOENP2J8-unsplash.jpg",
    name: "rhino",
  },
  { imgSrc: "./cards/alec-favale-nzPOHL2pD_g-unsplash.jpg", name: "llama" },
  { imgSrc: "./cards/alex-v-ujcmPPxhxT8-unsplash.jpg", name: "zebra" },
  { imgSrc: "./cards/andy-chilton-yZLkK1XfyHg-unsplash.jpg", name: "owl" },
  { imgSrc: "./cards/benjamin-wong-_T633k1Ly7A-unsplash.jpg", name: "monkey" },
  { imgSrc: "./cards/edgar-nKC772R_qog-unsplash.jpg", name: "kitten" },
  {
    imgSrc: "./cards/guillermo-casales-LQfcolSv2M0-unsplash.jpg",
    name: "bunny",
  },
  { imgSrc: "./cards/janko-ferlic-p8GrLz4H4CA-unsplash.jpg", name: "bear" },
  { imgSrc: "./cards/joy-christian-nhHx-_zsesc-unsplash.jpg", name: "puppy" },
  { imgSrc: "./cards/kerin-gedge-JDzoTGfoogA-unsplash.jpg", name: "duck" },
  { imgSrc: "./cards/kerin-gedge-P3sEj29SHD8-unsplash.jpg", name: "koala" },
  {
    imgSrc: "./cards/maurits-bausenhart-Ay67yB6vmF8-unsplash.jpg",
    name: "elephant",
  },
  {
    imgSrc: "./cards/mitchel-lensink-TNnJbUv25ck-unsplash.jpg",
    name: "turtle",
  },
  {
    imgSrc: "./cards/nikolay-tchaouchev-ZtWCfStISI4-unsplash.jpg",
    name: "fox",
  },
  { imgSrc: "./cards/onur-binay-E18nZ_OHh04-unsplash.jpg", name: "cat" },
  {
    imgSrc: "./cards/redcharlie-redcharlie1-gQMWOENP2J8-unsplash.jpg",
    name: "rhino",
  },
];

//Randomize Cards
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Card Function
const cardGenerator = () => {
  const cardData = randomize();

  //Generate HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    //giving them class names
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    //Attach img src and attribute name
    face.src = item.imgSrc;
    card.setAttribute("name", item.name); //check this

    //Appending cards to section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    //toggle class to toggle
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

//Checking if cards match
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");

  //Logic to match cards
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");

        //so that the second card actually flips and you can see it
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("Uh-oh! Try Again!");
      }
    }
  }
  //Check winning
  if (toggleCard.length === 30) {
    restart("NICE! YOU WON!");
  }
};

//Restart function
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";

  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");

    //randomize
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });

  //reset lives
  playerLives === 12;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();
