document.addEventListener('DOMContentLoaded', function () {
   let tooltips = document.querySelectorAll(".has-tooltip");

   function showTooltip(element, event) {

      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');

      // текст подсказки из title
      const tooltipText = element.getAttribute('title');

      tooltip.textContent = tooltipText;

      tooltip.style.left = `${event.clientX}px`;
      tooltip.style.top = `${event.clientY}px`;

      tooltip.classList.toggle('tooltip_active');

      element.appendChild(tooltip);

      setTimeout(function () {
         tooltip.classList.remove('tooltip_active');
         element.removeChild(tooltip);
      }, 1000);
   }

   function click() {
      tooltips.forEach(function (element) {
         element.addEventListener('click', function (event) {
            event.preventDefault();
            showTooltip(element, event);
         });
      });
   }

   click();
});
