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
let currentTurn = "me";
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

var removeUsedClass = function (tag) {
  if (tag.querySelector(".used")) {
    var hasUsedClassList = tag.querySelectorAll(".used");
    for (i = 0; i < hasUsedClassList.length; i++) {
      hasUsedClassList[i].classList.remove("used");
    }
  }
};
// 턴 바꾸기
turnBtn.addEventListener("click", function () {
  document.querySelector("#you").classList.toggle("turn");
  document.querySelector("#me").classList.toggle("turn");

  removeUsedClass(myHero);
  removeUsedClass(myField);
  removeUsedClass(yourHero);
  removeUsedClass(yourField);
  if (currentTurn === "me") {
    currentTurn = "you";
    myCost.textContent = 10;
    console.log("currentTurn is " + currentTurn);
  } else {
    currentTurn = "me";
    yourCost.textContent = 10;
    console.log("currentTurn is " + currentTurn);
  }
  myClickedCard = [];
  yourClickedCard = [];
});

// 카드 만들기
var Card = function (team, hero) {
  this.team = team;
  this.att = Math.ceil(Math.random() * 3);
  this.hp = Math.ceil(Math.random() * 10);
  this.cost = Math.floor((this.hp + this.att) / 2);
  if (hero) {
    this.hero = hero;
    this.hp = Math.ceil(Math.random() * 10) + 5;
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
    heroCardTag.querySelector(".cost").style.display = "none";
    var heroText = document.createElement("div");
    heroText.textContent = "영웅";
    heroCardTag.append(heroText);
    locate.append(heroCardTag);
    if (team === "me") {
      cardAttributeToTag(myHeroCard, heroCardTag, true);
      console.log(myHeroCard, heroCardTag);
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
        console.log(myCard, myCardTag);
      } else if (team === "you") {
        yourCardTag.push(deckCardTag);
        cardAttributeToTag(yourCard[i], yourCardTag[i]);
      }
    }
  }
};

// 초기세팅
var initGame = function () {
  myDeck.innerHTML = "";
  yourDeck.innerHTML = "";
  myHero.innerHTML = "";
  yourHero.innerHTML = "";
  myField.innerHTML = "";
  yourField.innerHTML = "";
  myCard = [];
  yourCard = [];
  myCardTag = [];
  yourCardTag = [];
  myFieldCardTag = [];
  yourFieldCardTag = [];
  deckCardTag = null;
  myHeroCard = null;
  yourHeroCard = null;
  heroCardTag = null;
  makeCardAndToScreen(5, "me", myDeck);
  makeCardAndToScreen(1, "me", myHero);
  makeCardAndToScreen(5, "you", yourDeck);
  makeCardAndToScreen(1, "you", yourHero);
};
initGame();

// 덱에서 필드로 이동 (상대카드 눌렀을 때)
yourDeck.addEventListener("click", function (e) {
  console.log(e.toElement);
  if (currentTurn === "me") {
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

  yourFieldCardTag.push(cardTag.cloneNode(true));
  var deckClickedIndex = yourCardTag.indexOf(e.toElement);
  yourFieldCard.push(yourCard[deckClickedIndex]);
  for (i = 0; i < yourFieldCardTag.length; i++) {
    yourFieldCardTag[i].classList.remove("hidden");
    yourField.append(yourFieldCardTag[i]);
    cardAttributeToTag(yourFieldCard[i], yourFieldCardTag[i]);
  }

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
  if (currentTurn === "you") {
    return;
  }
  if (
    Number(myCost.textContent) < e.toElement.querySelector(".cost").textContent
  ) {
    return;
  } else {
    myCost.textContent -= e.toElement.querySelector(".cost").textContent;
  }
  myFieldCardTag.push(cardTag.cloneNode(true));
  var deckClickedIndex = myCardTag.indexOf(e.toElement);
  myFieldCard.push(myCard[deckClickedIndex]);
  for (i = 0; i < myFieldCardTag.length; i++) {
    myFieldCardTag[i].classList.remove("hidden");
    myField.append(myFieldCardTag[i]);
    cardAttributeToTag(myFieldCard[i], myFieldCardTag[i]);
  }
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
  if (e.toElement.classList.contains("used") || currentTurn === "you") {
    return;
  }
  myClickedCard.push(e.toElement);
  myClickedCard[0].classList.add("clicked");
  console.log(myClickedCard + "my 1");
  if (myClickedCard.length !== 0) {
    myClickedCard[0].classList.remove("clicked");
    myClickedCard = [];
    myClickedCard.push(e.toElement);
    myClickedCard[0].classList.add("clicked");

    console.log(myClickedCard);
  }
});
yourHeroAndField.addEventListener("click", function (e) {
  if (myClickedCard.length === 0) {
    return;
  }
  yourClickedCard.push(e.toElement);
  console.log(yourClickedCard + "your 1");
  if (myClickedCard.length !== 0 && yourClickedCard.length !== 0) {
    yourClickedCard[0].querySelector(
      ".hp"
    ).textContent -= myClickedCard[0].querySelector(".att").textContent;
    // 공격대상이 영웅이면
    if (yourClickedCard[0].querySelector(".cost").textContent === "") {
      if (yourClickedCard[0].querySelector(".hp").textContent <= 0) {
        console.log("my win!!");
        setTimeout(initGame, 1000);
        return;
      }
      yourHeroCard.hp -= myClickedCard[0].querySelector(".att").textContent;

      yourHero.innerHTML = "";
      yourHero.append(yourClickedCard[0]);
      // 공격대상이 일반병사면
    } else {
      if (yourClickedCard[0].querySelector(".hp").textContent <= 0) {
        var deadCardIndex = yourFieldCardTag.indexOf(yourClickedCard[0]);
        yourFieldCardTag.splice(deadCardIndex, 1);
      }
      yourField.innerHTML = "";
      for (i = 0; i < yourFieldCardTag.length; i++) {
        yourField.append(yourFieldCardTag[i]);
      }
    }

    myClickedCard[0].classList.remove("clicked");
    myClickedCard[0].classList.add("used");
    myClickedCard = [];
    yourClickedCard = [];
  }
});
// 공격시작 (상대 턴)
yourHeroAndField.addEventListener("click", function (e) {
  if (e.toElement.classList.contains("used") || currentTurn === "me") {
    return;
  }
  yourClickedCard.push(e.toElement);
  yourClickedCard[0].classList.add("clicked");
  console.log(yourClickedCard + "your 2");

  if (yourClickedCard.length !== 0) {
    yourClickedCard[0].classList.remove("clicked");
    yourClickedCard = [];
    yourClickedCard.push(e.toElement);
    yourClickedCard[0].classList.add("clicked");

    console.log(yourClickedCard);
  }
});
myHeroAndField.addEventListener("click", function (e) {
  if (yourClickedCard.length === 0) {
    return;
  }
  myClickedCard.push(e.toElement);
  console.log(myClickedCard + "my 2");
  if (myClickedCard.length !== 0 && yourClickedCard.length !== 0) {
    myClickedCard[0].querySelector(
      ".hp"
    ).textContent -= yourClickedCard[0].querySelector(".att").textContent;
    // 공격대상이 영웅이면
    if (myClickedCard[0].querySelector(".cost").textContent === "") {
      if (myClickedCard[0].querySelector(".hp").textContent <= 0) {
        console.log("your win!!");
        setTimeout(initGame, 1000);
        return;
      }
      myHeroCard.hp -= yourClickedCard[0].querySelector(".att").textContent;

      myHero.innerHTML = "";
      myHero.append(myClickedCard[0]);
      // 공격대상이 일반병사면
    } else {
      if (myClickedCard[0].querySelector(".hp").textContent <= 0) {
        var deadCardIndex = myFieldCardTag.indexOf(myClickedCard[0]);
        myFieldCardTag.splice(deadCardIndex, 1);
      }
      myField.innerHTML = "";
      for (i = 0; i < myFieldCardTag.length; i++) {
        myField.append(myFieldCardTag[i]);
      }
    }

    yourClickedCard[0].classList.remove("clicked");
    yourClickedCard[0].classList.add("used");
    myClickedCard = [];
    yourClickedCard = [];
  }
});
