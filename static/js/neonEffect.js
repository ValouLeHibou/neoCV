const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function randomNbr(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function divThemAll() {
    let neonNbr = $('.neonEffect').length;
    for (var i = 0; i < neonNbr; i++) {
        let myString = $('.neonEffect')[i].textContent;
        let newString = "";
        for (var j = 0; j < myString.length; j++) {
          newString = newString + "<span class='freeze'>" + myString[j] + "</span>";
        }
        $('.neonEffect')[i].innerHTML = newString;
    }
}

const neonLoop = async () => {
    await sleep(2500);
    let neonNbr = $('.neonEffect').length;
    let doIt = randomNbr(0, 1);
    for (var i = 0; i < neonNbr; i++) {
        if (doIt == 1) {
            let again = 0;
            let letter = randomNbr(0, $('.neonEffect')[i].children.length - 1);
            while (again != 15) {
                let freezeOne = randomNbr(10, 80);
                let freezeTwo = randomNbr(10, 80);
                neonOff(i, letter);
                await sleep(freezeOne);
                reset(i, letter);
                await sleep(freezeTwo);
                again++;
            }
        doIt = 0;
        }
        else if (doIt == 0) {
            doIt = 1;
        }
    }
    neonLoop();
}

function neonOff(neon, letter) {
    if ($('.neonEffect')[neon].children[letter].innerHTML != " ") {
        $('.neonEffect')[neon].children[letter].style.textShadow = 'none';
        $('.neonEffect')[neon].children[letter].style.color = 'black';
    }
}

function reset(neon, letter) {
    if ($('.neonEffect')[neon].children[letter].innerHTML != " ") {
        $('.neonEffect')[neon].children[letter].style.color = 'white';
        if ($('.neonEffect')[neon].classList[1] == "devops") {
            $('.neonEffect')[neon].children[letter].style.textShadow = '0 0 20px #00f0ff';
        }
        else if ($('.neonEffect')[neon].classList[1] == "valentin") {
            $('.neonEffect')[neon].children[letter].style.textShadow = '0 0 20px #bd00ff';
        }
        else if ($('.neonEffect')[neon].classList[1] == "mainTitle") {
            $('.neonEffect')[neon].children[letter].style.textShadow = '0 0 25px blue';
        }
        else if ($('.neonEffect')[neon].classList[1] == "underTitle") {
            $('.neonEffect')[neon].children[letter].style.textShadow = '0 0 25px red';
        }
    }
}

divThemAll(); //put all letters in a single <span>
neonLoop();

// ###################################################### //

// Cursor Effect

const cursor = async () => {
    $('#cursor').hide();
    await sleep(600);
    $('#cursor').show();
    await sleep(600);
    cursor();
}

cursor();
