document.addEventListener("DOMContentLoaded", function() {
   let tabContent = document.querySelectorAll(".tab__content");
   let tab = document.querySelectorAll(".tab");


   function show(Id){
       tabContent.forEach(item => item.classList.remove("tab__content_active"));
       tabContent[Id].classList.add("tab__content_active");
       tab.forEach(item => item.classList.remove("tab_active"));
       tab[Id].classList.add("tab_active");
   }

   Array.from(tab).forEach((el,index) => {
      el.addEventListener("click", function (){
          show(index);
      });
   });
});