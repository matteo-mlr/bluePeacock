const MONTH_OFFEST = 1

let mouseDown = false;
setInititalPosition('raumtemperaturSlider');

function setup() {

    let startDateObject = document.getElementById('start');
    startDateObject.addEventListener('change', function () {
        setStartDate(toUnixTimeStamp(startDateObject.value));
    });

    let endDateObject = document.getElementById('end');
    endDateObject.addEventListener('change', function () {
        alert("change!");
        setEndDate(toUnixTimeStamp(endDateObject.value));
    });

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
function reloadIframe() {
    document.getElementById("grafana-iframe");
}




