const carouselBtns = document.querySelectorAll("#carousel");
const homeContainer = document.querySelector(".home-container");
const homeTextTitle = document.querySelector("#homeText-title");
const homeTextContent = document.querySelector("#homeText-content");
const homeImage = document.querySelector("#homeImage");
const homeTextContainer = document.querySelector("#homeText-container");
const homeSlide = document.querySelector(".homeSlide");
const modeBtn = document.querySelector("#modeBtn");
const icon = document.querySelector("#icon");
const mainHomePage = document.querySelector("#mainHomePage");
const menuBtn = document.querySelector("#menuBtn");
const menuBodyContainer = document.querySelector(".menuBody-container");
const links=document.querySelectorAll('.links')


const textData = [
  {
    id: 0,
    title: "Aluminium",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing el m odit ipsam facilis obcaecati ut perferendis ratione quia quas, nemo quae alias illum cum neque rem, molestias, inventore numquam.",
    imageLocation:
      "https://7355038.fs1.hubspotusercontent-na1.net/hubfs/7355038/aluminum-stock-1-1.jpg",
  },
  {
    id: 1,
    title: "Silicone",
    text: "Lorem ip ing elit. A eveniet laborum odit ipsam facilis obcaecati ut perferendis ratione quia quas, nemo quae alias illum cum neque rem, molestias, inventore numquam.",
    imageLocation:
      "https://www.expertreviews.co.uk/sites/expertreviews/files/2022/09/best_silicone_sealant_-_header_image.png",
  },
  {
    id: 2,
    title: "Accessories",
    text: "Lorem ipsum dolor, sit amet  laborum odit ipsam facilis obcaecati ut perferendis ratione quia quas, nemo quae alias illum cum neque rem, molestias, inventore numquam.",
    imageLocation:
      "https://images.immediate.co.uk/production/volatile/sites/3/2020/06/best-nintendo-switch-accessories-9f2042b.jpg?quality=90&resize=620,414",
  },
];
const menuData = [
  {
    id: 0,
    title: "Aluminium",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing el m odit ipsam facilis obcaecati ut perferendis ratione quia quas, nemo quae alias illum cum neque rem, molestias, inventore numquam.",
    imageLocation:
      "https://7355038.fs1.hubspotusercontent-na1.net/hubfs/7355038/aluminum-stock-1-1.jpg",
  },
  {
    id: 1,
    title: "Silicone",
    text: "Lorem ip ing elit. A eveniet laborum odit ipsam facilis obcaecati ut perferendis ratione quia quas, nemo quae alias illum cum neque rem, molestias, inventore numquam.",
    imageLocation:
      "https://www.expertreviews.co.uk/sites/expertreviews/files/2022/09/best_silicone_sealant_-_header_image.png",
  },
  {
    id: 2,
    title: "Accessories",
    text: "Lorem ipsum dolor, sit amet  laborum odit ipsam facilis obcaecati ut perferendis ratione quia quas, nemo quae alias illum cum neque rem, molestias, inventore numquam.",
    imageLocation:
      "https://images.immediate.co.uk/production/volatile/sites/3/2020/06/best-nintendo-switch-accessories-9f2042b.jpg?quality=90&resize=620,414",
  },
  {
    id: 3,
    title: "Silicone",
    text: "Lorem ip ing elit. A eveniet laborum odit ipsam facilis obcaecati ut perferendis ratione quia quas, nemo quae alias illum cum neque rem, molestias, inventore numquam.",
    imageLocation:
      "https://www.expertreviews.co.uk/sites/expertreviews/files/2022/09/best_silicone_sealant_-_header_image.png",
  },
];

links.forEach((singleEle)=>{
  console.log(singleEle)
  singleEle.addEventListener('click',()=>{
    for (const x of links) {
      x.classList.remove('activeList')
      singleEle.classList.add('activeList')
    }
  })
})

for (let i = 0; i < carouselBtns.length; i++) {
  carouselBtns[i].addEventListener("click", slider.bind(this, i));
}
function slider(j) {
  for (x of carouselBtns) {
    x.classList.remove("active");
    carouselBtns[j].classList.add("active");
  }

  for (x of textData) {
    if (x.id === j) {
      homeSlide.innerHTML = `
      <div class="homeContent-container animate__animated animate__fadeIn">
      <div class="homeText-container" id="homeText-container">
        <h1 class="homeText-title">Welcome To Pyae Sone!</h1>
        <h3 class="homeText-title" id="homeText-title">${x.title}</h3>
        <p class="homeText-content" id="homeText-content">${x.text}
        </p>
        <div class="homeBtn-container">
          <button class="btn btn-danger me-3">Menu</button>
          <button class="btn btn-outline-danger border-3">Contact Us</button>
        </div>
      </div>

      <div class="homeImage-container">
        <img src=${x.imageLocation} alt="" class="homeImage" id="homeImage">
      </div>
    </div>
      `;
    }
  }
}

modeBtn.addEventListener("click", () => {
  console.log("hello");
  mainHomePage.classList.toggle("darkMode");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

window.addEventListener("DOMContentLoaded", () => {
  btnCategory();
  displayMenuBox(menuData);
});

function displayMenuBox(menu) {
  const menuBox = menu
    .map((e) => {
      return `
    <div class="menuBox-container">
    <div class="menuBox">
      <div class="menuImage-container">
        <img src="${e.imageLocation}" alt="" class="menuImage">
      </div>
      <div class="menuTextContent-container">
        <h3 class="menuTextTitle">${e.title}</h3>
        <p class="menuTextContext">${e.text}</p>
      </div>
    </div>
  </div> 
    `;
    })
    .join("");
  menuBodyContainer.innerHTML = menuBox;
}

function btnCategory() {
  const category = menuData.reduce(
    (a, c) => {
      if (!a.includes(c.title)) {
        a.push(c.title);
      }
      return a;
    },
    ["all"]
  );

  const allBtn = category
    .map((element) => {
      return `<button class='filterBtns' data-id='${element}'>${element}</button>`;
    });
    const joinAllBtn = allBtn.join(''); 
    console.log(menuBtn);
  menuBtn.innerHTML = joinAllBtn;

  const filterBtns=document.querySelectorAll('.filterBtns')
  filterBtns[0].classList.add('act')
  filterBtns.forEach((filterBtn)=>{
    filterBtn.addEventListener('click',(e)=>{
      for (const x of filterBtns) {
        x.classList.remove('activeBtn','act')
        filterBtn.classList.add('activeBtn')
      }
      const filterData=menuData.filter((filter)=>{
        if(filter.title===e.currentTarget.dataset.id){
          return filter
        }
      })
      if(e.currentTarget.dataset.id==='all'){
        displayMenuBox(menuData)
      }else{
        displayMenuBox(filterData)
      }
    })
  })
}
