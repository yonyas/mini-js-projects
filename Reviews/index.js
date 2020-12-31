const person = {
  pic: [
    "images/beach.jpg",
    "images/cups.jpg",
    "images/hongkong.jpg",
    "images/street.jpg",
  ],
  name: ["Susan Smith", "Anna Johnson", "Peter Jones", "Bill Anderson"],
  job: ["WEB DEVELOPER", "WEB DESIGNER", "INTERN", "THE BOSS"],
  info: [
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic",
  ],
};

const img = document.querySelector(".img");
const fullName = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const random = document.querySelector(".random");

let n = 0;

prev.addEventListener("click", function () {
  n--;
  if (n < 0) {
    n = 3;
  }
  img.style.backgroundImage = `url(${person.pic[n]})`;
  fullName.textContent = `${person.name[n]}`;
  job.textContent = `${person.job[n]}`;
  info.textContent = `${person.info[n]}`;
});

next.addEventListener("click", function () {
  n++;
  if (n > 3) {
    n = 0;
  }
  img.style.backgroundImage = `url(${person.pic[n]})`;
  fullName.textContent = `${person.name[n]}`;
  job.textContent = `${person.job[n]}`;
  info.textContent = `${person.info[n]}`;
});

random.addEventListener("click", function () {
  let randomNum = Math.floor(Math.random() * 4);

  img.style.backgroundImage = `url(${person.pic[randomNum]})`;
  fullName.textContent = `${person.name[randomNum]}`;
  job.textContent = `${person.job[randomNum]}`;
  info.textContent = `${person.info[randomNum]}`;
});
