let mouseDown = false;

/* Browsererkennung */

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
console.log(isSafari)
var safari = document.querySelectorAll('.safari');
var notSafari = document.querySelectorAll('.not-safari');

if (isSafari) {
    
    safari.forEach(function(entry) {
        entry.classList.remove('disable');
    });

    notSafari.forEach(function(entry) {
        entry.classList.add('disable');
    });

} else {

    safari.forEach(function(entry) {
        entry.classList.add('disable');
    });

    notSafari.forEach(function(entry) {
        entry.classList.remove('disable');
    });
    
}

<<<<<<< HEAD
getDropdown();

=======
>>>>>>> 7b0353c075a574ac74eb096486a249eb6c7562b9
/* Variablen für Buttons */

let btnAktualisieren = document.getElementById('aktualisieren');
let btnAnwenden = document.getElementById('anwenden');
let einstellungenAktualisiert = false;
let werteGeaendert = false;

/******/

setInititalPositionRaumtemp();
setInititalPositionZuluft();
setInititalPositionAbluft();
setInititalPositionKompressor();

let raumtemperaturSlider = document.getElementById('raumtemperaturSlider');
let zuluftSlider = document.getElementById('lüfterZuluftSlider');
let abluftSlider = document.getElementById('lüfterAbluftSlider');
let kompressorSlider = document.getElementById('kompressorSlider');

var eventListenerRaumtemperatur = (event) => update(event, 'raumtemperaturSlider', '.current1', '.raumtempLow', '.raumtempHigh');
var eventListenerZuluft = (event) => update(event, 'lüfterZuluftSlider', '.current2', '.zuluftLow', '.zuluftHigh');
var eventListenerAbluft = (event) => update(event, 'lüfterAbluftSlider', '.current3', '.abluftLow', '.abluftHigh');
var eventListenerKompressor = (event) => update(event, 'kompressorSlider', '.current4', '.kompressorLow', '.kompressorHigh');

raumtemperaturSlider.addEventListener('mousedown', function () {

    mouseDown = true;
    document.querySelector('.currentValue1').classList.add('bigger');


});

raumtemperaturSlider.addEventListener('mouseup', function () {

    mouseDown = false;
    document.querySelector('.currentValue1').classList.remove('bigger');


});

zuluftSlider.addEventListener('mousedown', function () {

    mouseDown = true;
    document.querySelector('.currentValue2').classList.add('bigger');


});

zuluftSlider.addEventListener('mouseup', function () {

    mouseDown = false;
    document.querySelector('.currentValue2').classList.remove('bigger');


});

abluftSlider.addEventListener('mousedown', function () {

    mouseDown = true;
    document.querySelector('.currentValue3').classList.add('bigger');


});

abluftSlider.addEventListener('mouseup', function () {

    mouseDown = false;
    document.querySelector('.currentValue3').classList.remove('bigger');


});


kompressorSlider.addEventListener('mousedown', function () {

    mouseDown = true;
    document.querySelector('.currentValue4').classList.add('bigger');


});

kompressorSlider.addEventListener('mouseup', function () {

    mouseDown = false;
    document.querySelector('.currentValue4').classList.remove('bigger');


});


raumtemperaturSlider.addEventListener('mousemove', eventListenerRaumtemperatur);
lüfterZuluftSlider.addEventListener('mousemove', eventListenerZuluft);
abluftSlider.addEventListener('mousemove', eventListenerAbluft);
kompressorSlider.addEventListener('mousemove', eventListenerKompressor);

function update (event, slider, span, low, high) {

    if (mouseDown) {

        if (slider == 'raumtemperaturSlider') {

            let raumtemperatur = document.getElementById(slider).value
            if (raumtemperatur < 1900) {
                document.querySelector(low).classList.add('disable')
            }
            if (raumtemperatur > 1900) {
                document.querySelector(low).classList.remove('disable')
            }
            if (raumtemperatur < 2300) {
                document.querySelector(high).classList.remove('disable')
            }
            if (raumtemperatur > 2300) {
                document.querySelector(high).classList.add('disable')
            }
            let verhältnis = (raumtemperatur-1800) / 600
            let object = document.querySelector(span);
            let marginLeft = document.getElementById(slider).offsetLeft

            let left = 465 * verhältnis;
            object.style.left = left + marginLeft;

            let raumtemperaturValue = Math.round(raumtemperatur / 100)

            document.querySelector('.currentValue1').innerHTML = raumtemperaturValue + "°C";  

            werteGeaendert = true;
            btnAktualisieren.classList.remove('inactive');

        }      

        if (slider == 'lüfterZuluftSlider') {

            let zuluft = document.getElementById(slider).value
            if (zuluft < 1) {
                document.querySelector(low).classList.add('disable')
            }
            if (zuluft > 1) {
                document.querySelector(low).classList.remove('disable')
            }
            if (zuluft < 3) {
                document.querySelector(high).classList.remove('disable')
            }
            if (zuluft > 3) {
                document.querySelector(high).classList.add('disable')
            }
            let verhältnis = zuluft / 4;
            let object = document.querySelector(span);
            let marginLeft = document.getElementById(slider).offsetLeft;
            let left = 0;
            if (zuluft == 0) {
                left = 465 * verhältnis;
            } else {
                left = 465 * verhältnis + 13;
            }
            object.style.left = left + marginLeft;

            let zuluftValue = Math.round(zuluft)

            document.querySelector('.currentValue2').innerHTML = zuluftValue; 

            werteGeaendert = true;
            btnAktualisieren.classList.remove('inactive');

        }

        if (slider == 'lüfterAbluftSlider') {

            let zuluft = document.getElementById(slider).value
            if (zuluft < 1) {
                document.querySelector(low).classList.add('disable')
            }
            if (zuluft > 1) {
                document.querySelector(low).classList.remove('disable')
            }
            if (zuluft < 3) {
                document.querySelector(high).classList.remove('disable')
            }
            if (zuluft > 3) {
                document.querySelector(high).classList.add('disable')
            }
            let verhältnis = zuluft / 4
            let object = document.querySelector(span);
            let marginLeft = document.getElementById(slider).offsetLeft

            let left = 0;
            if (zuluft == 0) {
                left = 465 * verhältnis;
            } else {
                left = 465 * verhältnis + 13;
            }

            object.style.left = left + marginLeft;

            let zuluftValue = Math.round(zuluft)

            document.querySelector('.currentValue3').innerHTML = zuluftValue;

            werteGeaendert = true;
            btnAktualisieren.classList.remove('inactive');

        }

        if (slider == 'kompressorSlider') {

            let kompressor = document.getElementById(slider).value
            if (kompressor == 0) {
                document.querySelector(low).classList.add('disable')
            }
            if (kompressor > 0) {
                document.querySelector(low).classList.remove('disable')
            }
            if (kompressor < 2) {
                document.querySelector(high).classList.remove('disable')
            }
            if (kompressor == 2) {
                document.querySelector(high).classList.add('disable')
            }
            let verhältnis = kompressor / 2
            let object = document.querySelector(span);
            let marginLeft = document.getElementById(slider).offsetLeft

            let left = 465 * verhältnis;

            let kompressorValue = Math.round(kompressor / 10)

            if (kompressor == 0) {
                document.querySelector('.currentValue4').innerHTML = "Kühlen";
                object.style.left = left + marginLeft;
            } else if (kompressor == 1) {
                document.querySelector('.currentValue4').innerHTML = "Aus";
                object.style.left = left + marginLeft;
            } else if (kompressor == 2) {
                document.querySelector('.currentValue4').innerHTML = "Heizen";
                object.style.left = left + marginLeft - 20;
            }

            werteGeaendert = true;
            btnAktualisieren.classList.remove('inactive');
    
        }

    }

};

function setInititalPositionRaumtemp () {

    let raumtemp = document.getElementById('raumtemperaturSlider').value
    let verhältnis = (raumtemp-1800) / 600
    let object = document.querySelector('.current1');
    let marginLeft = document.getElementById('raumtemperaturSlider').offsetLeft

    let left = 465 * verhältnis;

    object.style.left = left + marginLeft;

    let raumtemperatur = Math.round(raumtemp / 100)

    document.querySelector('.currentValue1').innerHTML = raumtemperatur + "°C"; 

};

function setInititalPositionZuluft () {

    let zuluft = document.getElementById('lüfterZuluftSlider').value
    let verhältnis = zuluft / 4;
    let object = document.querySelector('.current2');
    let marginLeft = document.getElementById('lüfterZuluftSlider').offsetLeft

    let left = 0;
    if (zuluft == 0) {
        left = 465 * verhältnis;
    } else {
        left = 465 * verhältnis + 13;
    }

    object.style.left = left + marginLeft;

    let zuluftValue = Math.round(zuluft);

    document.querySelector('.currentValue2').innerHTML = zuluftValue; 

};

function setInititalPositionAbluft () {

    let zuluft = document.getElementById('lüfterAbluftSlider').value
    let verhältnis = zuluft / 4;
    let object = document.querySelector('.current3');
    let marginLeft = document.getElementById('lüfterAbluftSlider').offsetLeft

    let left = 0;
    if (zuluft == 0) {
        left = 465 * verhältnis;
    } else {
        left = 465 * verhältnis + 13;
    }

    object.style.left = left + marginLeft;

    let zuluftValue = Math.round(zuluft);

    document.querySelector('.currentValue3').innerHTML = zuluftValue; 

};

function setInititalPositionKompressor () {

    let abluft = document.getElementById('kompressorSlider').value
    let verhältnis = abluft / 2
    let object = document.querySelector('.current4');
    let marginLeft = document.getElementById('kompressorSlider').offsetLeft

    let left = 465 * verhältnis;

    object.style.left = left + marginLeft;

    let abluftValue = Math.round(abluft / 10)

    document.querySelector('.currentValue4').innerHTML = "Aus";
    
};

/* Buttons */

btnAktualisieren.addEventListener('mouseover', function() {
    if (werteGeaendert == true) {
        btnAktualisieren.classList.add('active');
    }
});

btnAktualisieren.addEventListener('mouseout', function () {
    btnAktualisieren.classList.remove('active');
});

btnAktualisieren.addEventListener('click', function () {
    if (werteGeaendert == true) {
        einstellungenAktualisiert = true;
        btnAnwenden.classList.remove('inactive');
    }
});

btnAnwenden.addEventListener('mouseover', function() {
    if (einstellungenAktualisiert == true) {
        btnAnwenden.classList.add('active');
    }
});

btnAnwenden.addEventListener('mouseout', function () {
    btnAnwenden.classList.remove('active');
});

function dropdown (index) {

    let quelle1 = "http://localhost:3000/d-solo/SoFiK5XZz/kondensator-and-verdampfer-2w?orgId=1&from=1579970090373&to=1582171278843&panelId=2";
    let quelle2 = "http://localhost:3000/d-solo/SoFiK5XZz/kondensator-and-verdampfer-2w?orgId=1&from=1579970090373&to=1582171278843&panelId=3";
    
    switch (index) {

        case 1: 
        document.querySelector('.grafana-frame').src = quelle1; 
        document.querySelector('.dropbtn').innerHTML = "Dashboard 1";
        break;

        case 2: 
        document.querySelector('.grafana-frame').src = quelle2; 
        document.querySelector('.dropbtn').innerHTML = "Dashboard 2";
        break;

    }

}

async function getDropdown () {

    let obj;

    //fetch('../../config.json')
    //    .then(res => res.json())
    //    .then(data => obj = data)
    //    .then(() => document.querySelector('.dropdown-content').innerHTML = '<a href=\"#\" onclick=\"dropdown(\'' + obj['dashboard1'] + '\')\">Dashboard 1</a>')
        
}

