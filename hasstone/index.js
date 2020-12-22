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
// 카드 생성자를 담을 데이터
var myCard = [];
var yourCard = [];

// html element 넣기
var myCardTag = [];
var yourCardTag = [];

// 카드 만들기
var Card = function (team, hero) {
  this.team = team;
  this.att = Math.ceil(Math.random() * 3);
  this.hp = Math.ceil(Math.random() * 10);
  this.cost = Math.floor((this.hp + this.att) / 2);
  if (hero) {
    this.hero = hero;
  }
};
var makeCardAndToScreen = function (num, team, locate) {
  for (i = 0; i < num; i++) {
    if (team === "me") {
      myCard.push(new Card(team));
    }
    if (team === "you") {
      yourCard.push(new Card(team));
    }
  }

  var toScreen = function (num, team) {
    for (i = 0; i < num; i++) {
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
  };
  toScreen(num, team);
};
makeCardAndToScreen(5, "me", myDeck);
makeCardAndToScreen(5, "you", yourDeck);
console.log(myCard);
console.log(myCardTag);
