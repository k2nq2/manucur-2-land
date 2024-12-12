 window.onscroll = function showHeader(){
    let cont = document.querySelector('.fixed-btn');

    if(window.scrollY > 790){
        cont.style.display = "block";
    } else {
         cont.style.display = "none";
     }
 }




document.addEventListener('DOMContentLoaded', () => {
  let lastActiveElement = null; // Переменная для хранения последнего активного элемента

  document.querySelectorAll('.lesson').forEach((element) => {
    element.addEventListener('click', () => {
      if (lastActiveElement) {
        lastActiveElement.classList.remove('active'); // Убираем класс у предыдущего элемента
      }
      element.classList.add('active'); // Добавляем класс текущему элементу
      lastActiveElement = element; // Запоминаем текущий элемент как последний активный
    });
  });
});



$(".clickit").click(function() {
  $("#card").css("top","-200px");  // Added px to make it work, 
                                   //   or get rid of quotes -500
  var href = $(this).attr('href');

       // Delay setting the location 
  setTimeout(function() {window.location = href}, 1000);
  return false;
});
