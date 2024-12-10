 window.onscroll = function showHeader(){
    let cont = document.querySelector('.fixed-btn');

    if(window.scrollY > 790){
        cont.style.display = "block";
    } else {
         cont.style.display = "none";
     }
 }



var btn = document.getElementById("lesson");
btn.addEventListener("click", function() {
  this.classList.add("active");
});
var btn = document.getElementById("lesson2");
btn.addEventListener("click", function() {
  this.classList.add("active-2");
});