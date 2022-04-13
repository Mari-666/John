const body = document.querySelector('#body')
const menu = document.querySelector('.menu__body')
const burger = document.querySelector('.icon-menu')

burger.addEventListener('click', function(e) {
  if (burger.classList.contains('_active')) {
    burger.classList.remove('_active')
    menu.classList.remove('_active')
    body.classList.remove('_active')
  } else {
    burger.classList.add('_active')
    menu.classList.add('_active')
    body.classList.add('_active')
  }
})
