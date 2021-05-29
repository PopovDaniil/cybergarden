//слайдер
document.addEventListener('DOMContentLoaded', function () {
  const slider = new ChiefSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 3000
  }) ?? null;
});

function toggleDropdown() {
  document.querySelector(".conteiner").classList.toggle("show");
}

function setForm(index) {
  document.querySelector('#members').classList.toggle('hide')
  document.querySelector('#organizers').classList.toggle('hide')
}




