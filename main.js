let mouseDown = false;
setInititalPosition('raumtemperaturSlider');

window.onload = function () {

    let raumtemperaturSlider = document.getElementById('raumtemperaturSlider');
    let zuluftSlider = document.getElementById('lüfterZuluft');
    
    raumtemperaturSlider.addEventListener('mousedown', function () {

        mouseDown = true;
        document.querySelector('.currentValue').classList.add('bigger');

    });

    raumtemperaturSlider.addEventListener('mouseup', function () {

        mouseDown = false;
        document.querySelector('.currentValue').classList.remove('bigger');

    });

    raumtemperaturSlider.addEventListener('mousemove', update);

};

function update () {

    if (mouseDown) {
        let raumtemp = document.getElementById('raumtemperaturSlider').value
        if (raumtemp < 1900) {
            document.querySelector('.low').classList.add('disable')
        }
        if (raumtemp > 1900) {
            document.querySelector('.low').classList.remove('disable')
        }
        if (raumtemp < 2300) {
            document.querySelector('.high').classList.remove('disable')
        }
        if (raumtemp > 2300) {
            document.querySelector('.high').classList.add('disable')
        }
        let verhältnis = (raumtemp-1800) / 600
        let object = document.querySelector('.current');
        let marginLeft = document.getElementById('raumtemperaturSlider').offsetLeft

        let left = 465 * verhältnis;
        object.style.left = left + marginLeft;

        let raumtemperatur = Math.round(raumtemp / 100)

        document.querySelector('.currentValue').innerHTML = raumtemperatur + "°C";  

    }

};

function setInititalPosition (id) {

    let raumtemp = document.getElementById(id).value
    if (raumtemp < 1900) {
        document.querySelector('.low').classList.add('disable')
    }
    if (raumtemp > 1900) {
        document.querySelector('.low').classList.remove('disable')
    }
    if (raumtemp < 2300) {
        document.querySelector('.high').classList.remove('disable')
    }
    if (raumtemp > 2300) {
        document.querySelector('.high').classList.add('disable')
    }
    let verhältnis = (raumtemp-1800) / 600
    let object = document.querySelector('.current');
    let marginLeft = document.getElementById('raumtemperaturSlider').offsetLeft

    let left = 465 * verhältnis;
    object.style.left = left + marginLeft;

    let raumtemperatur = Math.round(raumtemp / 100)

    document.querySelector('.currentValue').innerHTML = raumtemperatur + "°C"; 

};



