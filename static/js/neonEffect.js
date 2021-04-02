const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function randomNbr(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function divThemAll() {
    for (var i = 0; i < 2; i++) {
        let myString = $('.neonEffect')[i].textContent;
        let newString = "";
        for (var j = 0; j < myString.length; j++) {
          newString = newString + "<span class='freeze'>" + myString[j] + "</span>";
        }
        $('.neonEffect')[i].innerHTML = newString;
    }
}

const neonLoop = async () => {
    await sleep(2500); // Wait before loop restart
    let i = 0;
    let freezeNbr = $('.freeze').length;
    let letter = randomNbr(0, freezeNbr - 1);
    while (i != 15) {
        let freezeOne = randomNbr(10, 80);
        let freezeTwo = randomNbr(10, 80);
        neonOff(letter);
        await sleep(freezeOne);
        reset(letter);
        await sleep(freezeTwo);
        i++;
    }
    reset(letter);
    neonLoop();
}

function neonOff(letter) {
    $('.freeze')[letter].style.textShadow = 'none';
    $('.freeze')[letter].style.color = 'black';
}

function reset(letter) {
    if ($('.freeze')[letter].parentElement.id == "devops") {
        $('.freeze')[letter].style.textShadow = '0 0 20px #00f0ff';
        $('.freeze')[letter].style.color = 'white';
    }
    if ($('.freeze')[letter].parentElement.id == "valentin") {
        $('.freeze')[letter].style.textShadow = '0 0 20px #bd00ff';
        $('.freeze')[letter].style.color = 'white';
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
