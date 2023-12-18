const wow = new WOW({
    boxClass: 'wow', /* класс, который необходим для работы wow.js */
    animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
    offset: 30, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
    mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
    live: true /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
  })
  wow.init(); /* Инициализация плагина с установленными выше свойствами */
  

  
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
})

let menuItems = document.querySelectorAll('.nav-item')

menuItems.forEach(function(menuItem){
  menuItem.addEventListener('click', function(){
    document.querySelector('.burger').classList.remove('active');
    document.querySelector('.nav').classList.remove('open')
  })
})


