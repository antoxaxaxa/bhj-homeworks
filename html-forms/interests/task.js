document.addEventListener('DOMContentLoaded', function () {
   let checkboxes = document.querySelectorAll('.interest__check');

   checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('click', function () {
         let parentLi = checkbox.closest('.interest');
         if (parentLi.querySelector('.interests_active')) {
            activeCheckboxes(parentLi);
         }
      });
   });

   function activeCheckboxes(parentLi) {
      let nestedCheckboxes = parentLi.querySelectorAll('.interests_active .interest__check');
      nestedCheckboxes.forEach(function (el) {
         el.checked = parentLi.querySelector('.interest__check').checked;
      });
   }
});
