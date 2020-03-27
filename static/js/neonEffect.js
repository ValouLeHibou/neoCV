function neonLoop() {
    setTimeout( function () {
        let i = Math.floor((Math.random() * 6) + 1 );
        neonOn(i);
        setTimeout(function() {
            neonOff(i);
            setTimeout(function() {
                neonOn(i);
                setTimeout(function() {
                    neonOff(i);
                    setTimeout(function() {
                        neonOn(i);
                        setTimeout(function() {
                            neonOff(i);
                            setTimeout(function() {
                                neonOn(i);
                                setTimeout(function() {
                                    neonOff(i);
                                    setTimeout(function() {
                                        neonOn(i);
                                        setTimeout(function() {
                                            neonOff(i);
                                            setTimeout(function() {
                                                neonOn(i);
                                                setTimeout(function() {
                                                    reset(i);
                                                }, 30)
                                            }, 80)
                                        }, 30)
                                    }, 200)
                                }, 150)
                            }, 80)
                        }, 100)
                    }, 80)
                }, 30)
            }, 250)
        }, 30)
        neonLoop()
    }, 3500);
}

function neonOn(i) {
    $('.neonEffect')[i].style.textShadow = '0 0 10px #00f0ff';
    $('.neonEffect')[i].style.color = '#00f0ff';
}

function neonOff(i) {
    $('.neonEffect')[i].style.textShadow = 'none';
    $('.neonEffect')[i].style.color = 'black';
}

function reset(i) {
    $('.neonEffect')[i].style.textShadow = 'none';
    $('.neonEffect')[i].style.color = 'white';
}

neonLoop();
