/*==================== 菜单展示 ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== 移除菜单（移动设备） ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction(e) {
  if (e.target.tagName !== "A") return;
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
// 我擦，还有这么傻的东西吗，用事件委托啊,甚至不用事件委托，直接给大盒子加事件都可以，虽然可能点到空白处
// navLink.forEach(n=>n.addEventListener('click',linkAction))

const navList = document.querySelector(".nav__list");
navList.addEventListener("click", linkAction);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  // pageYOffset是scrollY的别名，兼容性更好(ie)
  const scrollY = window.pageYOffset;
  Array.from(sections).forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const sectionClassList = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );
    // 靠近滚动窗口顶部50以内的时候且尚有部分没有从顶部滚出，也就是当前元素在窗口以内的时候切换对应图标为活动状态
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // href后面加星号和等于号表示至少包含一个，直接等于的话意味着全等
      sectionClassList.classList.add("active-link");
    } else {
      sectionClassList.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 200) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollTop);
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedTheme === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  this.document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv() {
  document.body.classList.add("scale-cv");
}
/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
  document.body.classList.remove("scale-cv");
}
/*==================== GENERATE PDF ====================*/
// PDF generated area
let areaCv = document.getElementById("area-cv");
let resumeButton = document.getElementById("resume-button");
// Html2pdf options
let opt = {
  margin: 0,
  filename: "myResume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { unit: "a4", orientation: "portrait" },
};
// Function to call areaCv and Html2Pdf options
// https://ekoopmans.github.io/html2pdf.js/
// 把网页转换成pdf的工具，html2pdf.bundle.min.js来自上述工具的github仓库dist文件夹
function generateResume() {
  console.log('generateResume--start');
  console.log(areaCv);
  html2pdf(areaCv);
  // let ceshi = document.getElementById('ceshi')
  // console.log(ceshi);
  // console.log(html2pdf);
  // html2pdf(ceshi)
  console.log('generateResume--end');
  // html2pdf().set(opt).from(areaCv).save();
}
// When the button is clicked, it executes the three functions

resumeButton.addEventListener("click", () => {
  // console.log(html2pdf);
  console.log(111);
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  scaleCv();
  // 2. The PDF is generated
  generateResume();
  // html2pdf(document.body);
  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
  setTimeout(removeScale, 5000);
  console.log(222);
});
