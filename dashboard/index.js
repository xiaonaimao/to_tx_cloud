const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector('.theme-toggler')

// 显示侧边栏,被注释的block使用了动画，但是视频只做了弹出，没有做收回
// 我这里就改成了控制left，如果可以的话还是用一下动画弹回去
// 网上搜了一下，发现，animate这个属性是css的，而css基本通过标签类名id来做选择器
// animate默认只在渲染的那一会触发，也就是说我要切类名来实现，名字可以叫show，hide
menuBtn.addEventListener("click", () => {
//   sideMenu.style.display = "block";
  sideMenu.style.left = 0;
});

// 隐藏侧边栏
closeBtn.addEventListener("click", () => {
//   sideMenu.style.display = "none";
  sideMenu.style.left = '-100%';
});

themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')
    // 下面这两句可以kaol一下变成一句话
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})
