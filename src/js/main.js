import "../style/normalize.scss"
import "../style/main.scss";

const animationItems = document.querySelectorAll('.animation');
const observer = new IntersectionObserver(activateTargets);
animationItems.forEach(item => {
  observer.observe(item);
});

function activateTargets(items) {
  items.forEach(item => {
    if (item.isIntersecting) { // スクロールエリアに入った場合
      item.target.classList.add('active');
    }
  });
};