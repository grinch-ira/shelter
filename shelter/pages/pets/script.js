console.log(`Пагинация работает, но после уменьшения/увеличения
 экрана надо перезагрузить страницу, чтобы заново загрулилось нужное количество страниц
 Пожалуйста, учтите это при проверке:)`)

const pets = [
  {
    id: 0,
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 1,
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 2,
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    id: 3,
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    id: 4,
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    id: 5,
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    id: 6,
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 7,
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const iconMenu = document.querySelector(".menu__icon");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header__logo");
const friendsContainer = document.querySelector(".main");
const headerMenuList = document.querySelector(".header-menu__list");
const footer = document.querySelector(".footer");
const body = document.querySelector("body")

function removeActiveClass(){
  document.body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  headerMenu.classList.remove("_active");
  header.classList.remove("_lock");
  headerLogo.classList.remove("_lock");
  friendsContainer.classList.remove("_lock");
  footer.classList.remove("_lock");
  headerMenuList.classList.remove("_active");
}
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    headerMenu.classList.toggle("_active");
    header.classList.toggle("_lock");
    headerLogo.classList.toggle("_lock");
    friendsContainer.classList.toggle("_lock");
    footer.classList.toggle("_lock");
    headerMenuList.classList.toggle("_active");
  });
  friendsContainer.addEventListener("click",event=>{
removeActiveClass()
  })
  footer.addEventListener("click",event=>{
    removeActiveClass()
  })
}

const menuLinks = document.querySelectorAll(
  ".header-menu__items-link[data-goto]"
);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        headerMenu.classList.remove("_active");
        headerMenuList.classList.remove("_active");
        header.classList.remove("_lock");
        headerLogo.classList.remove("_lock");
        friendsContainer.classList.remove("_lock");
        footer.classList.remove("_lock");
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function first(arr, length) {
  return arr.slice(0, length);
}

function shuffle(arr) {
  let result = [];

  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
}

function randoms(arr, length) {
  return first(shuffle(arr), length);
}

let randomPets = randoms(pets, 8);

let randomPetsTwo = randoms(randomPets.slice(), 8);
let randomPetsThree = randoms(randomPets.slice(), 8);
let randomPetsFour = randoms(randomPets.slice(), 8);
let randomPetsFive = randoms(randomPets.slice(), 8);
let randomPetsSix = randoms(randomPets.slice(), 8);
const petsList = randomPets.concat(
  randomPetsTwo,
  randomPetsThree,
  randomPetsFour,
  randomPetsFive,
  randomPetsSix
);
console.log(petsList);
let arr = [];
petsList.forEach((a) => {
  arr.push(a);
});
console.log(arr);

function getImages() {
  let arr = [];
  petsList.forEach((a) => {
    arr.push(a);
  });
  list.update();
}

const html = {
  get(element) {
    return document.querySelector(element);
  },
};

let totalItems = 48;
let perPage;

let content = document.querySelector(".friends-slider-body");
console.log(content.offsetWidth);
function returnPerPage() {
  if (document.body.clientWidth >= 1280) {
    perPage = 8;
  }
  if (document.body.clientWidth <= 1279 && document.body.clientWidth >= 768) {
    perPage = 6;
  }
  if (document.body.clientWidth <= 767 && document.body.clientWidth >= 320) {
    perPage = 3;
  }
  return perPage;
}

const state = {
  page: 1,
  perPage: returnPerPage(),
  totalPage: Math.ceil(totalItems / perPage),
  maxVisibleButtons: 1,
  imagesList: arr,
};
const controls = {
  next() {
    state.page++;
    if (state.page > state.totalPage) {
      state.page--;
    }
  },
  prev() {
    state.page--;
    if (state.page < 1) {
      state.page++;
    }
  },
  goTo(page) {
    if (page < 1) {
      page = 1;
    }
    state.page = page;
    if (page > state.totalPage) {
      state.page = state.totalPage;
    }
  },
  createListeners() {
    html.get(".big-left-button").addEventListener("click", () => {
      controls.goTo(1);
      update();
    });
    html.get(".big-right-button").addEventListener("click", () => {
      controls.goTo(state.totalPage);
      update();
    });
    html.get(".right-button").addEventListener("click", () => {
      controls.next();
      update();
    });
    html.get(".left-button").addEventListener("click", () => {
      controls.prev();
      update();
    });
  },
};
const bigLeftButton = document.querySelector(".big-left-button");
const leftButton = document.querySelector(".left-button");
const bigRightButton = document.querySelector(".big-right-button");
const rightButton = document.querySelector(".right-button");

const list = {
  create(images) {
    let createImg = "";
    images.forEach((value, index) => {
      createImg += `
		<div class="slider-image_container data-pets-id = "${value.id}"">
		<div class="slider-image data-pets-id = "${value.id}""><img data-pets-id = "${value.id}"
				src="${value.img}"
				alt="${value.name}"></div>
		<div class="slider-name" data-pets-id = "${value.id}">${value.name}</div>
		<div class="slider-button" data-pets-id = "${value.id}"><div data-pets-id = "${value.id}"  class="know-slider__button">Learn more</div>
		</div>
	</div>
		`;
    });
    html.get(".friends-slider-body").innerHTML = createImg;
  },
  update() {
    html.get(".friends-slider-body").innerHTML = "";
    let page = state.page - 1;

    let start = page * returnPerPage();
    let end = start + returnPerPage();

    const paginatedItems = state.imagesList.slice(start, end);
    list.create(paginatedItems);
  },
};

const buttons = {
  create(number) {
    const button = document.createElement("div");
    button.innerHTML = number;
    if (state.page == number) button.classList.add("current");

    button.addEventListener("click", (event) => {
      const page = event.target.innerText;
      controls.goTo(+page);
      update();
    });
    html.get(".first-page-button").appendChild(button);
  },
  update() {
    html.get(".first-page-button").innerHTML = "";
    const { maxLeft, maxRight } = buttons.calculateMaxVisible();
    console.log(maxLeft, maxRight, state.page);
    for (let page = maxLeft; page <= maxRight; page++) {
      buttons.create(page);
    }

    if (state.page == 1) {
      bigLeftButton.classList.add("inactive");
      leftButton.classList.add("inactive");
    }
    if (state.page > 1 && state.page <= state.totalPage) {
      bigLeftButton.classList.remove("inactive");
      leftButton.classList.remove("inactive");
    }
    if (state.page == state.totalPage) {
      bigRightButton.classList.add("inactive");
      rightButton.classList.add("inactive");
    }
    if (state.page < state.totalPage) {
      bigRightButton.classList.remove("inactive");
      rightButton.classList.remove("inactive");
    }
  },
  calculateMaxVisible() {
    const { maxVisibleButtons } = state;
    let maxLeft = state.page - Math.floor(maxVisibleButtons / 2);
    let maxRight = state.page + Math.floor(maxVisibleButtons / 2);
    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxVisibleButtons;
    }

    if (maxRight > state.totalPage) {
      maxLeft = state.totalPage - (maxVisibleButtons - 1);
      maxRight = state.totalPage;

      if (maxLeft < 1) maxLeft = 1;
    }
    return { maxLeft, maxRight };
  },
};

function update() {
  list.update();
  buttons.update();
}

function init() {
  getImages(totalItems);
  controls.createListeners();
  update();
}

init();
window.addEventListener("resize", () => {
  init();
});

const friendsSlider = document.querySelector(".friends-slider");
const petsOverlayWrapper = document.querySelector(".pets-overlay-wrapper");
const popUpWrapper = document.querySelector(".pets-overlay-wrapper");
const friendsSliderBody = document.querySelector(".friends-slider-body");

function targetClosestDiv(event) {
  let target = event.target;
  let div = target.closest("div");
  let link = target.closest("a");
  if (!div && !link) {
    return;
  }
  if (!friendsSlider.contains(div) && !friendsSlider.contains(link)) {
    return;
  }
  return div;
}

let selectedDiv;

function highlight(div) {
  if (selectedDiv) {
    petsOverlayWrapper.classList.remove("_active");
  }
  selectedDiv = div;
  petsOverlayWrapper.classList.add("_active");
}

friendsSliderBody.addEventListener("click", (event) => {
  highlight(targetClosestDiv(event));
  let petsId = event.target.dataset.petsId;
  body.classList.add("_active")

  let index = arr.map((el) => el.id).indexOf(parseInt(petsId));
  let pet = arr[index];

  popUpWrapper.innerHTML = `

   
	<div class="pets-page-container">
		<div class="close-popup">
			<img class="close" src="../../assets/images/svg/close.svg"alt="">
		</div>
	<div class="pets-overlay-page">
		<div class="pets-overlay-image">
			<img class="overlay-image" src="${pet.img}" alt="petsOverlay">
		</div>
		<div class="pets-overlay-text">
			<div class="pets-overlay-title">${pet.name}</div>
			<div class="pets-overlay-subtitle">${pet.type} - ${pet.breed}</div>
			<div class="pets-overlay-information">${pet.description}</div>
			<div class="pets-overlay-extra">
				<ul class="extra-list">
					<li class="extra-list__item"><b>Age:</b> ${pet.age}</li>
					<li class="extra-list__item"><b>Inoculations:</b> ${pet.inoculations}</li>
					<li class="extra-list__item"><b>Diseases:</b> ${pet.diseases}</li>
					<li class="extra-list__item"><b>Parasites:</b> ${pet.parasites}</li>
				</ul>
			</div>
		</div>
	</div>
   </div>

	`;

  const closePopUp = document.querySelector(".close-popup");

  closePopUp.addEventListener("click", () => {
    petsOverlayWrapper.classList.remove("_active");
    body.classList.remove("_active")
  });

  petsOverlayWrapper.addEventListener("click", (event) => {
    if (event.target.tagName == "FORM") {
      petsOverlayWrapper.classList.remove("_active");
      body.classList.remove("_active")
    } else {
      return;
    }
  });
});

const headerInactiveLink = document.querySelectorAll(".header-inactive_link")
headerInactiveLink.forEach(item=>{
  item.addEventListener("click",event=>{
    event.preventDefault()
  })
})