let wrapperMenu = document.querySelector('.wrapper-menu');
let isOpen = 0;

$(document).click(function(event) {
    let clickedId = $(event.target)[0].id;
    let clickedClass = $(event.target)[0].classList[0];
    if (clickedId == "wrapper" || clickedClass == "line-menu") {
        if (isOpen == 0) {
            wrapperMenu.classList.toggle('open');
            isOpen = 1;
        }
        else {
            wrapperMenu.classList.toggle('open');
            isOpen = 0;
        }
    }
    else if (clickedId != "wrapper" && isOpen == 1) {
        wrapperMenu.classList.toggle('open');
        isOpen = 0;
    }
});
