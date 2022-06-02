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
const makeFriends = document.querySelector(".page-make_friends");
const headerLogo = document.querySelector(".header__logo");
const knowRest = document.querySelector(".know-rest");
const helpShelter = document.querySelector(".help-shelter");
const sliderImageContainer = document.querySelectorAll(
  ".slider-image_container"
);
const petsOverlayWrapper = document.querySelector(".pets-overlay-wrapper");
const body = document.querySelector("body")
const cozyHouse = document.querySelector(".cozy-house")

/**================================================================= */
function removeActiveClass(){
  document.body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  headerMenu.classList.remove("_active");
  header.classList.remove("_lock");
  makeFriends.classList.remove("_lock");
  headerLogo.classList.remove("_lock");
  knowRest.classList.remove("_lock");
  helpShelter.classList.remove("_lock");
  cozyHouse.classList.remove("_lock")
}

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    headerMenu.classList.toggle("_active");
    header.classList.toggle("_lock");
    makeFriends.classList.toggle("_lock");
    headerLogo.classList.toggle("_lock");
    knowRest.classList.toggle("_lock");
    helpShelter.classList.toggle("_lock");
    cozyHouse.classList.toggle("_lock");

  });
makeFriends.addEventListener("click",event=>{
removeActiveClass()
})
cozyHouse.addEventListener("click",event=>{
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
  /**плавный переход по ссылке */
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
        header.classList.remove("_lock");
        makeFriends.classList.remove("_lock");
        headerLogo.classList.remove("_lock");
        knowRest.classList.remove("_lock");
        helpShelter.classList.remove("_lock");
        cozyHouse.classList.remove("_lock")
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

new Swiper(".slider-body__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1154: {
      slidesPerView: 3,
      spaceBetween: 90,
      slidesPerGroup: 3,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },
    310: {
      slidesPerView: 1,
      spaceBetween: 5,
      slidesPerGroup: 1,
    },
  },
});

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

randomPets.forEach((a) => {
  console.log(a.name);
});

const sliderBody = document.querySelector(".slider-body");
const showSlider = (pets) => {
  const renderImage = randomPets
    .map((pet) => {
      return `
          <div class="slider-image_container swiper-slide data-pets-id = "${pet.id}">
      <div class="slider-image data-pets-id = "${pet.id}""><img data-pets-id = "${pet.id}" src=${pet.img}
              alt="Katrine"> </div>
      <div class="slider-name" data-pets-id = "${pet.id}">${pet.name}</div>
      <div class="slider-button" data-pets-id = "${pet.id}"><div data-pets-id = "${pet.id}"  class="know-slider__button">Learn more</div>
      </div>
      </div>
        `;
    })
    .join("");
  sliderBody.innerHTML = renderImage;
};
showSlider(pets);

const sliderBodyContainer = document.querySelector(".slider-body__container");
const buttonNext = document.querySelector(".swiper-button-next");
const buttonPrev = document.querySelector(".swiper-button-prev");
const popUpWrapper = document.querySelector(".pets-overlay-wrapper");

function targetClosestDiv(event) {
  let target = event.target;
  let div = target.closest("div");
  if (!div) {
    return;
  }
  if (!sliderBodyContainer.contains(div)) {
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

sliderBody.addEventListener("click", (event) => {
  highlight(targetClosestDiv(event));
  let petsId = event.target.dataset.petsId;
  console.log(parseInt(petsId));
  body.classList.add("_active")

  let index = randomPets.map((el) => el.id).indexOf(parseInt(petsId));
  let pet = randomPets[index];

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
      wrapper.classList.remove("_active")
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