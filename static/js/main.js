const MONTH_OFFEST = 1

let mouseDown = false;
setInititalPositionRaumtemp();
setInititalPositionZuluft();
setInititalPositionAbluft();

window.onload = function () {
    let startDateObject = document.getElementById('start');
    startDateObject.addEventListener('change', function () {
        setStartDate(toUnixTimeStamp(startDateObject.value));
    });

    let endDateObject = document.getElementById('end');
    endDateObject.addEventListener('change', function () {
        setEndDate(toUnixTimeStamp(endDateObject.value));
    });

    let raumtemperaturSlider = document.getElementById('raumtemperaturSlider');
    let zuluftSlider = document.getElementById('lüfterZuluftSlider');
    let abluftSlider = document.getElementById('lüfterAbluftSlider');
    let kompressorSlider = document.getElementById('kompressorSlider');
    
    var eventListenerRaumtemperatur = (event) => update(event, 'raumtemperaturSlider', '.current1', '.raumtempLow', '.raumtempHigh');
    var eventListenerZuluft = (event) => update(event, 'lüfterZuluftSlider', '.current2', '.zuluftLow', '.zuluftHigh');
    var eventListenerAbluft = (event) => update(event, 'lüfterAbluftSlider', '.current3', '.abluftLow', '.abluftHigh');
    var eventListenerKompressor = (event) => update(event, 'raumtemperaturSlider', '.current4', '.raumtempLow', '.raumtempHigh');
    
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

};

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

        }      

        if (slider == 'lüfterZuluftSlider') {

            let zuluft = document.getElementById(slider).value
            if (zuluft < 100) {
                document.querySelector(low).classList.add('disable')
            }
            if (zuluft > 100) {
                document.querySelector(low).classList.remove('disable')
            }
            if (zuluft < 900) {
                document.querySelector(high).classList.remove('disable')
            }
            if (zuluft > 900) {
                document.querySelector(high).classList.add('disable')
            }
            let verhältnis = zuluft / 1000
            let object = document.querySelector(span);
            let marginLeft = document.getElementById(slider).offsetLeft

            let left = 465 * verhältnis;
            object.style.left = left + marginLeft;

            let zuluftValue = Math.round(zuluft / 10)

            document.querySelector('.currentValue2').innerHTML = zuluftValue + "%"; 

        }

        if (slider == 'lüfterAbluftSlider') {

            let zuluft = document.getElementById(slider).value
            if (zuluft < 100) {
                document.querySelector(low).classList.add('disable')
            }
            if (zuluft > 100) {
                document.querySelector(low).classList.remove('disable')
            }
            if (zuluft < 900) {
                document.querySelector(high).classList.remove('disable')
            }
            if (zuluft > 900) {
                document.querySelector(high).classList.add('disable')
            }
            let verhältnis = zuluft / 1000
            let object = document.querySelector(span);
            let marginLeft = document.getElementById(slider).offsetLeft

            let left = 465 * verhältnis;
            object.style.left = left + marginLeft;

            let zuluftValue = Math.round(zuluft / 10)

            document.querySelector('.currentValue3').innerHTML = zuluftValue + "%"; 

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
    let verhältnis = zuluft / 1000
    let object = document.querySelector('.current2');
    let marginLeft = document.getElementById('lüfterZuluftSlider').offsetLeft

    let left = 465 * verhältnis;

    object.style.left = left + marginLeft;

    let zuluftValue = Math.round(zuluft / 10)

    document.querySelector('.currentValue2').innerHTML = zuluftValue + "%"; 

};

function setInititalPositionAbluft () {

    let abluft = document.getElementById('lüfterAbluftSlider').value
    let verhältnis = abluft / 1000
    let object = document.querySelector('.current3');
    let marginLeft = document.getElementById('lüfterAbluftSlider').offsetLeft

    let left = 465 * verhältnis;

    object.style.left = left + marginLeft;

    let abluftValue = Math.round(abluft / 10)

    document.querySelector('.currentValue3').innerHTML = abluftValue + "%"; 

};

function setStartDate(unixTimestamp){
  let link = document.getElementById("grafana-iframe").getAttribute("src");
  let linkSplit = link.split("from=");
  let linkBeginning = linkSplit[0] + "from="  + unixTimestamp;
  let linkEnd = linkSplit[1].split("&to=");
  let newLink =  linkBeginning + "&to=" + linkEnd[1];
  document.getElementById("grafana-iframe").setAttribute("src", newLink)
}

function setEndDate(unixTimestamp){
    let link = document.getElementById("grafana-iframe").getAttribute("src");
    let linkSplit = link.split("to=");
    let newLink =  linkSplit[0] + "to="  + unixTimestamp;
    document.getElementById("grafana-iframe").setAttribute("src", newLink)
}

function toUnixTimeStamp(dateString) {
    let timeLiteralArray =  resolveLiterals(dateString)
    var date = new Date(Date.UTC(timeLiteralArray[0]
        ,timeLiteralArray[1]
        ,timeLiteralArray[2]
        ,timeLiteralArray[3]
        ,timeLiteralArray[4]
        ,timeLiteralArray[5]
        )
    );
    return date.getTime();
}

function resolveLiterals(dateString) {
    let splitDateString = dateString.split("-");
    let year = splitDateString[0];
    let month = splitDateString[1] - MONTH_OFFEST;
    let splitDayString = splitDateString[2].split("T");
    let day = splitDayString[0];
    let splitTimeString = splitDayString[1].split(":");
    let hour = splitTimeString[0];
    let minutes = splitTimeString[1];
    return [year, month, day, hour, minutes, 0]
}