//слайдер
document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 3000
    }) ?? null;

    /* выпадающее меню входа */
    let btn = document.querySelector(".header-conteiner__login");
    let menu = document.querySelector(".conteiner");
    btn.addEventListener('click', function () {
        menu.classList.toggle("show");
    })

  let membersForm = document.querySelector('#members')
  let organizersForm = document.querySelector('#organizers')


  });




