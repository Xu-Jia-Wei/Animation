document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  let delay = 0;

  const animateImages = () => {
      images.forEach((image, index) => {
          setTimeout(() => {
              image.style.animationName = 'rotateAndShrink';
              image.addEventListener('animationend', () => {
                  if (index === images.length - 1) {
                      setTimeout(() => {
                          images.forEach(img => img.style.animationName = 'grow');
                      }, 500); // 等待最后一张动画结束后再放大
                  }
              });
          }, delay);
          delay += 2000; // 动画持续时间为2秒
      });

      // 循环动画
      setTimeout(() => {
          images.forEach(img => {
              img.style.animationName = ''; // 重置动画
          });
          animateImages(); // 重新开始动画
      }, delay + 2000); // 等待所有动画结束后再次启动
  };

  animateImages();
});
