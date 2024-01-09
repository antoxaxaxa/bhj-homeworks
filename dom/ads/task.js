document.addEventListener("DOMContentLoaded", function() {
    let rotators = document.querySelector('.rotator');

    function startRotators() {
        let cases = rotators.querySelectorAll('.rotator__case');
        setInterval(function() {
            start(rotators, cases);
        }, 1000);
    }

    function start(rotators, cases) {
        let activeCase = rotators.querySelector('.rotator__case_active');
        activeCase.classList.remove('rotator__case_active');
        let nextCase = activeCase.nextElementSibling || cases[0];
        nextCase.classList.add('rotator__case_active');
    }

    startRotators();
});
