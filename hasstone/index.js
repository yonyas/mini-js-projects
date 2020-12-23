const body = document.querySelector("body");
const table = document.createElement("table");
const tr = document.createElement("tr");
const td = document.createElement("td");
const yourHero = document.querySelector("#yourHero");
const yourField = document.querySelector("#yourField");
const yourDeck = document.querySelector("#yourDeck");
const myHero = document.querySelector("#myHero");
const myField = document.querySelector("#myField");
const myDeck = document.querySelector("#myDeck");
const yourCost = document.querySelector("#yourCost");
const myCost = document.querySelector("#myCost");
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
var myHeroCardTag;
var yourHeroCardTag;

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
var makeCardAndToScreen = function (num, team, locate) {
  // 영웅일 때
  if (locate === myHero || locate === yourHero) {
    if (team === "me") {
      myHeroCard = new Card(team, true);
    } else if (team === "you") {
      yourHeroCard = new Card(team, true);
    }
    const card = document.createElement("div");
    const att = document.createElement("div");
    const hp = document.createElement("div");
    card.className = "card";
    att.className = `attribute att`;
    hp.className = `attribute hp`;
    card.append(att);
    card.append(hp);
    locate.append(card);
    if (team === "me") {
      myHeroCardTag = card;
      myHeroCardTag.querySelector(".att").textContent = myHeroCard.att;
      myHeroCardTag.querySelector(".hp").textContent = myHeroCard.hp;
    } else if (team === "you") {
      yourHeroCardTag = card;
      yourHeroCardTag.querySelector(".att").textContent = yourHeroCard.att;
      yourHeroCardTag.querySelector(".hp").textContent = yourHeroCard.hp;
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
      const card = document.createElement("div");
      const att = document.createElement("div");
      const cost = document.createElement("div");
      const hp = document.createElement("div");
      card.className = "card";
      att.className = `attribute att`;
      cost.className = `attribute cost`;
      hp.className = `attribute hp`;
      card.append(att);
      card.append(cost);
      card.append(hp);
      locate.append(card);
      if (team === "me") {
        myCardTag.push(card);
        myCardTag[i].querySelector(".att").textContent = myCard[i].att;
        myCardTag[i].querySelector(".cost").textContent = myCard[i].cost;
        myCardTag[i].querySelector(".hp").textContent = myCard[i].hp;
      } else if (team === "you") {
        yourCardTag.push(card);
        yourCardTag[i].querySelector(".att").textContent = yourCard[i].att;
        yourCardTag[i].querySelector(".cost").textContent = yourCard[i].cost;
        yourCardTag[i].querySelector(".hp").textContent = yourCard[i].hp;
      }
    }
  }
};
makeCardAndToScreen(5, "me", myDeck);
makeCardAndToScreen(1, "me", myHero);
makeCardAndToScreen(5, "you", yourDeck);
makeCardAndToScreen(1, "you", yourHero);

// 덱에서 필드로 이동
yourDeck.addEventListener("click", function (e) {
  console.log(e.toElement);
  if (
    Number(yourCost.textContent) <
    e.toElement.querySelector(".cost").textContent
  ) {
    return;
  } else {
    yourCost.textContent -= e.toElement.querySelector(".cost").textContent;
  }
  const card = document.createElement("div");
  const att = document.createElement("div");
  const hp = document.createElement("div");
  const cost = document.createElement("cost");
  card.className = "card";
  att.className = `attribute att`;
  hp.className = `attribute hp`;
  cost.className = `attribute cost`;
  card.append(att);
  card.append(hp);
  card.append(cost);
  yourField.append(card);

  yourFieldCardTag = card;
  yourFieldCardTag.querySelector(
    ".att"
  ).textContent = e.toElement.querySelector(".att").textContent;

  yourFieldCardTag.querySelector(".hp").textContent = e.toElement.querySelector(
    ".hp"
  ).textContent;

  yourFieldCardTag.querySelector(
    ".cost"
  ).textContent = e.toElement.querySelector(".cost").textContent;

  // 덱카드 삭제 (몇번째 카드 눌렀는지 확인 후 배열에서 지우고 다시 그리기)
  var deckClickedIndex = yourCardTag.indexOf(e.toElement);
  yourCardTag.splice(deckClickedIndex, 1);
  yourCard.splice(deckClickedIndex, 1);
  console.log(yourCardTag);
  console.log(yourCard);
  yourDeck.innerHTML = "";
  yourCardTag = [];
  makeCardAndToScreen(1, "you", yourDeck);
});

myDeck.addEventListener("click", function (e) {
  if (
    Number(myCost.textContent) < e.toElement.querySelector(".cost").textContent
  ) {
    return;
  } else {
    myCost.textContent -= e.toElement.querySelector(".cost").textContent;
  }
  console.log(e.toElement);
  const card = document.createElement("div");
  const att = document.createElement("div");
  const hp = document.createElement("div");
  const cost = document.createElement("cost");
  card.className = "card";
  att.className = `attribute att`;
  hp.className = `attribute hp`;
  cost.className = `attribute cost`;
  card.append(att);
  card.append(hp);
  card.append(cost);
  myField.append(card);

  myFieldCardTag = card;
  myFieldCardTag.querySelector(".att").textContent = e.toElement.querySelector(
    ".att"
  ).textContent;

  myFieldCardTag.querySelector(".hp").textContent = e.toElement.querySelector(
    ".hp"
  ).textContent;

  myFieldCardTag.querySelector(".cost").textContent = e.toElement.querySelector(
    ".cost"
  ).textContent;
  // 덱카드 삭제 (몇번째 카드 눌렀는지 확인 후 배열에서 지우고 다시 그리기)
  var deckClickedIndex = myCardTag.indexOf(e.toElement);
  myCardTag.splice(deckClickedIndex, 1);
  myCard.splice(deckClickedIndex, 1);
  console.log(myCardTag);
  console.log(myCard);
  myDeck.innerHTML = "";
  myCardTag = [];
  makeCardAndToScreen(1, "me", myDeck);
});
