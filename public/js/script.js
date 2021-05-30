
function edit() {
  let flag = document.querySelector("table").dataset.edit;
  if (flag) {
    let array = document.querySelectorAll("td");
    array.forEach(elem => {
      let content = elem.innerHTML;
      content.innerHTML = `<input type ='text' id='' value='${content}'>`;
    });
  } else {
    let array = querySelectorAll("td");
    array.forEach(elem => {
      elem.innerHTML = elem.value;
    })
  }
}
function setForm() {
  document.querySelector('#members').classList.toggle('hide')
  document.querySelector('#organizers').classList.toggle('hide')
}
