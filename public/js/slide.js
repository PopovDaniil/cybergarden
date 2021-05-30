//слайдер
document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 3000
    });

  });
  function toggleDropdown() {
    /* выпадающее меню входа */
    let btn = document.querySelector(".header-conteiner__login");
    let menu = document.querySelector(".conteiner");
    btn.addEventListener('click', function () {
      menu.classList.toggle("show");
    })
  }
