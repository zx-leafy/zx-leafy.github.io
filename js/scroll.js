// 简单的滚动效果

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// 导航栏滚动效果
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.padding = "10px 0";
    nav.style.background = "rgba(7, 18, 32, 0.95)";
  } else {
    nav.style.padding = "20px 0";
    nav.style.background = "rgba(10, 25, 41, 0.9)";
  }
});
