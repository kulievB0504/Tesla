const switchBtnsCondition = document.querySelectorAll('[data-condition]')
const switchBtnsRange = document.querySelectorAll('[data-lrange]')
const switchBtnsCarType = document.querySelectorAll('[data-cartype]')

switchBtnsCondition.forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('switch-on')
    }
})

const switchBtn = document.querySelector('[data-lrange]');
const teslaPrice = document.querySelector('.tesla_price');

switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('switch-on');
    if (switchBtn.classList.contains('switch-on')) {
        teslaPrice.innerText = '$100, 000';
    } else {
        teslaPrice.innerText = '$89, 990';
    }
});


switchBtnsCarType.forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('switch-on')
    }
})


const pMeterUp = document.querySelector('.potentiometer_up');
const pMeterDown = document.querySelector('.potentiometer_down');
const speedCounter = document.querySelector('.tesla_kilometer_speed');
const kilometers = document.querySelector('.kilometers')

const thermometerUp = document.querySelector('.potentiometer_thermometer_up')
const thermometerDown = document.querySelector('.potentiometer_thermometer_down')
const thermometer = document.querySelector('.tesla_thermometer')

const wheelsNineteen = document.querySelector('.potentiometer_wheels_up')
const wheelsTwentyOne = document.querySelector('.potentiometer_wheels_down')
const wheels = document.querySelector('.tesla_wheels')



let count = 60;
let kcount = 750
let therm = 20
let wheelsSize = 0

function updateCount() {
    speedCounter.innerHTML = count + " км/ч";
    kilometers.innerHTML = kcount + "км"
    thermometer.innerHTML = therm + "°"
    wheels.innerHTML = wheelsSize + 19

    const stove = document.querySelector('[data-stove]')
    const conBtn = document.querySelector('[data-condition]')

    if (therm < -3) {
        stove.innerHTML = 'Печка'
        conBtn.classList.add('switch-on')
        conBtn.onclick = () => {
            conBtn.classList.toggle('switch-on')
        }
    } else {
        stove.innerHTML = 'Кондиционер'
        conBtn.classList.remove('switch-on')
        
    }
}

function pushbtn(action) {
    switch (action) {
        case 'potentiometer_up':
            if (count < 320) {
                count += 5
                kcount -= 10
                updateCount()
            }
            break;
        case 'potentiometer_down':
            if (count > 0) {
                count -= 5
                kcount += 10
                updateCount()
            }
            break;
        case 'potentiometer_thermometer_up':
            if (true) {
                therm += 1
                updateCount()
            }
            break;

        case 'potentiometer_thermometer_down':
            if (true) {
                therm -= 1
                updateCount()
            }
            break;
        case 'potentiometer_wheels_up':
            if (wheelsSize < 2) {
                wheelsSize += 2;
                updateCount();
                document.querySelector('.tesla_box_img .two').style.width = '140px';
                document.querySelector('.tesla_box_img .two').style.position = 'absolute';
                document.querySelector('.tesla_box_img .two').style.right = '-132px';
                document.querySelector('.tesla_box_img .two').style.top = '-6px';

                document.querySelector('.tesla_box_img .one').style.width = '140px';
                document.querySelector('.tesla_box_img .one').style.position = 'absolute';
                document.querySelector('.tesla_box_img .one').style.right = '-132px';
                document.querySelector('.tesla_box_img .one').style.top = '-6px';

            }
            break;
        case 'potentiometer_wheels_down':
            if (wheelsSize = wheelsSize) {
                wheelsSize -= 2
                updateCount()
                document.querySelector('.tesla_box_img .one').style.width = '126px';
                document.querySelector('.tesla_box_img .one').style.position = 'absolute';
                document.querySelector('.tesla_box_img .one').style.right = '-126px';
                document.querySelector('.tesla_box_img .one').style.top = '0';

                document.querySelector('.tesla_box_img .two').style.width = '126px';
                document.querySelector('.tesla_box_img .two').style.position = 'absolute';
                document.querySelector('.tesla_box_img .two').style.right = '-126px';
                document.querySelector('.tesla_box_img .two').style.top = '0';
            }
    }
}

pMeterUp.onclick = () => {
    pushbtn('potentiometer_up')

}

pMeterDown.onclick = () => {
    pushbtn('potentiometer_down')

}

thermometerUp.onclick = () => {
    pushbtn('potentiometer_thermometer_up')
}

thermometerDown.onclick = () => {
    pushbtn('potentiometer_thermometer_down')
}


wheelsNineteen.onclick = () => {
    pushbtn('potentiometer_wheels_up')
}

wheelsTwentyOne.onclick = () => {
    pushbtn('potentiometer_wheels_down')
}


