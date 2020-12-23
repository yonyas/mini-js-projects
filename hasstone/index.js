const body = document.querySelector("body");
const cardTag = document.querySelector(".cardTag");
const yourHero = document.querySelector("#yourHero");
const yourField = document.querySelector("#yourField");
const yourDeck = document.querySelector("#yourDeck");
const yourCost = document.querySelector("#yourCost");
const myHero = document.querySelector("#myHero");
const myField = document.querySelector("#myField");
const myDeck = document.querySelector("#myDeck");
const myCost = document.querySelector("#myCost");
const turn = document.querySelector(".turn");
const turnBtn = document.querySelector("#turnBtn");
const myHeroAndField = document.querySelector("#myHeroAndField");
const yourHeroAndField = document.querySelector("#yourHeroAndField");
let myClickedCard = [];
let yourClickedCard = [];
let currentTurn = true; // true면 내턴, false면 상대턴

// 턴 바꾸기
turnBtn.addEventListener("click", function () {
  document.querySelector("#you").classList.toggle("turn");
  document.querySelector("#me").classList.toggle("turn");
  if (currentTurn) {
    currentTurn = false;
    myCost.textContent = 10;
    console.log("currentTurn is " + currentTurn);
  } else {
    currentTurn = true;
    yourCost.textContent = 10;
    console.log("currentTurn is " + currentTurn);
  }
});
// 카드 생성자를 담을 데이터
var myCard = [];
var yourCard = [];
var myFieldCard = [];
var yourFieldCard = [];
var myHeroCard;
var yourHeroCard;

// html element 넣기
var myCardTag = [];
var yourCardTag = [];
var myFieldCardTag = [];
var yourFieldCardTag = [];
var heroCardTag;
var deckCardTag = [];

// 카드 만들기
var Card = function (team, hero) {
  this.team = team;
  this.att = Math.ceil(Math.random() * 3);
  this.hp = Math.ceil(Math.random() * 10);
  this.cost = Math.floor((this.hp + this.att) / 2);
  if (hero) {
    this.hero = hero;
    this.att = Math.ceil(Math.random() * 3);
    this.hp = Math.ceil(Math.random() * 10) + 20;
    this.cost = null;
  }
};

var cardAttributeToTag = function (card, tag, hero) {
  if (hero) {
    tag.querySelector(".att").textContent = card.att;
    tag.querySelector(".hp").textContent = card.hp;
  } else {
    tag.querySelector(".att").textContent = card.att;
    tag.querySelector(".cost").textContent = card.cost;
    tag.querySelector(".hp").textContent = card.hp;
  }
};
var makeCardAndToScreen = function (num, team, locate) {
  // 영웅일 때
  if (locate === myHero || locate === yourHero) {
    if (team === "me") {
      myHeroCard = new Card(team, true);
    } else if (team === "you") {
      yourHeroCard = new Card(team, true);
    }
    heroCardTag = cardTag.cloneNode(true);
    heroCardTag.classList.remove("hidden");
    locate.append(heroCardTag);
    if (team === "me") {
      cardAttributeToTag(myHeroCard, heroCardTag, true);
    } else if (team === "you") {
      cardAttributeToTag(yourHeroCard, heroCardTag, true);
    }
  } else {
    // 덱에 생성할 떄
    for (i = 0; i < num; i++) {
      if (team === "me") {
        myCard.push(new Card(team));
      }
      if (team === "you") {
        yourCard.push(new Card(team));
      }
    }

    for (i = 0; i < myCard.length; i++) {
      deckCardTag = cardTag.cloneNode(true);
      deckCardTag.classList.remove("hidden");
      locate.append(deckCardTag);
      if (team === "me") {
        myCardTag.push(deckCardTag);
        cardAttributeToTag(myCard[i], myCardTag[i]);
      } else if (team === "you") {
        yourCardTag.push(deckCardTag);
        cardAttributeToTag(yourCard[i], yourCardTag[i]);
      }
    }
  }
};

makeCardAndToScreen(5, "me", myDeck);
makeCardAndToScreen(1, "me", myHero);
makeCardAndToScreen(5, "you", yourDeck);
makeCardAndToScreen(1, "you", yourHero);

// 덱에서 필드로 이동 (상대카드 눌렀을 때)
yourDeck.addEventListener("click", function (e) {
  console.log(e.toElement);
  if (currentTurn) {
    return;
  }
  if (
    Number(yourCost.textContent) <
    e.toElement.querySelector(".cost").textContent
  ) {
    return;
  } else {
    yourCost.textContent -= e.toElement.querySelector(".cost").textContent;
  }
  yourFieldCardTag = cardTag.cloneNode(true);
  yourFieldCardTag.classList.remove("hidden");
  yourField.append(yourFieldCardTag);

  var deckClickedIndex = yourCardTag.indexOf(e.toElement);
  yourFieldCard = yourCard[deckClickedIndex];
  cardAttributeToTag(yourFieldCard, yourFieldCardTag);

  yourCardTag.splice(deckClickedIndex, 1);
  yourCard.splice(deckClickedIndex, 1);
  console.log(yourCardTag);
  console.log(yourCard);
  yourDeck.innerHTML = "";
  yourCardTag = [];
  makeCardAndToScreen(1, "you", yourDeck);
});
// 덱에서 필드로 (내카드 눌렀을 때)
myDeck.addEventListener("click", function (e) {
  if (!currentTurn) {
    return;
  }
  if (
    Number(myCost.textContent) < e.toElement.querySelector(".cost").textContent
  ) {
    return;
  } else {
    myCost.textContent -= e.toElement.querySelector(".cost").textContent;
  }
  myFieldCardTag = cardTag.cloneNode(true);
  myFieldCardTag.classList.remove("hidden");
  myField.append(myFieldCardTag);

  var deckClickedIndex = myCardTag.indexOf(e.toElement);
  myFieldCard = myCard[deckClickedIndex];

  cardAttributeToTag(myFieldCard, myFieldCardTag);
  myCardTag.splice(deckClickedIndex, 1);
  myCard.splice(deckClickedIndex, 1);
  console.log(myCardTag);
  console.log(myCard);
  myDeck.innerHTML = "";
  myCardTag = [];
  makeCardAndToScreen(1, "me", myDeck);
});

// 공격시작 (내턴)
myHeroAndField.addEventListener("click", function (e) {
  myClickedCard.push(e.toElement);
  console.log(myClickedCard);
  myClickedCard[0].classList.add("clicked");
});
yourHeroAndField.addEventListener("click", function (e) {
  yourClickedCard.push(e.toElement);
  if (myClickedCard.length === 1 && yourClickedCard.length === 1) {
    console.log("attack");
    console.log(myClickedCard);
    myClickedCard[0].classList.remove("clicked");
    myClickedCard = [];
    yourClickedCard = [];
  }
});
