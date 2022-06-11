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
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const sectionClassList = document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList
    // 靠近滚动窗口顶部50以内的时候且尚有部分没有从顶部滚出，也就是当前元素在窗口以内的时候切换对应图标为活动状态
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // href后面加星号和等于号表示至少包含一个，直接等于的话意味着全等
      sectionClassList.add('active-link')
    } else {
      sectionClassList.remove('active-link')
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== SHOW SCROLL TOP ====================*/

/*==================== DARK LIGHT THEME ====================*/

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/

/*==================== GENERATE PDF ====================*/
// PDF generated area

// Html2pdf options

// Function to call areaCv and Html2Pdf options

// When the button is clicked, it executes the three functions

// 1. The class .scale-cv is added to the body, where it reduces the size of the elements

// 2. The PDF is generated

// 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
