const menuLists = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const btns = document.querySelector(".btns");
const menus = document.querySelector(".menus");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menuLists);

  // 버튼 구현(menuLists에서 category를 중복제거후 배열에 넣고, map, innerHtml 이용)
  const category = menuLists.reduce(
    function (value, cur) {
      if (!value.includes(cur.category)) {
        value.push(cur.category);
      }
      return value;
    },
    ["all"]
  );
  const categoryBtn = category
    .map(function (item, i) {
      return `<button class="btn" data-id="${item}">${item}</button>`;
    })
    .join("");
  btns.innerHTML = categoryBtn;
  // 버튼 클릭하면 data-id 받아서 menuList: category랑 같으면 display func 넘겨주기
  const btn = document.querySelectorAll(".btn");

  btn.forEach(function (currentBtn) {
    currentBtn.addEventListener("click", function (e) {
      let category = currentBtn.dataset.id;
      let menuCategory = menuLists.filter(function (menuListItem) {
        if (category === menuListItem.category) {
          return menuListItem;
        }
      });
      // map, filter 는 배열로 반환한다. 배열 초기화 자시고 할 필요없어 편함
      if (category === "all") {
        displayMenuItems(menuLists);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
});

// 배열객체 넣어주면 화면에 그림
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="menu">
          <img src="${item.img}" alt="${item.title}" />
          <div class="info">
            <div class="menu-title-price">
              <div class="menu-title">${item.title}</div>
              <div class="menu-price">$${item.price}</div>
            </div>
            <div class="detail-info">${item.desc}</div>
          </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  menus.innerHTML = displayMenu;
}
