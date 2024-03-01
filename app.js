document.addEventListener("DOMContentLoaded", function () {
    function changeColor() {
        var leftElement = document.querySelector('.left');
        var headingElements = document.querySelectorAll('.heading');

        toggleColor(leftElement);
        headingElements.forEach(function (element) {
            toggleColor(element);
        });
    }

    function toggleColor(element) {
        var currentColor = window.getComputedStyle(element).getPropertyValue('background-color');
        var newColor = (currentColor === "rgb(255, 155, 0)" || currentColor === "#ff9b00") ? "#3a3a3a" : "#ff9b00";
        element.style.backgroundColor = newColor;
    }

    var btn = document.querySelector('.btn');
    btn.addEventListener("click", changeColor);
});