// Set the date we're counting down to
var countDownDate = new Date("Oct 30, 2023 15:37:25").getTime();

const x = setInterval(() => {
    if (x) {
        clearInterval()
    }
    let now = new Date().getTime()
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateElement('days', days)
    updateElement('hours', hours)
    updateElement('minutes', minutes)
    updateElement('seconds', seconds)
}, 1000)


function updateElement(className, content) {
    content = getDigit(content)

    const mainElement = document.querySelector(`.widget-card.${className}`)
    const recentValue = mainElement.childNodes[1].getAttribute('filp-front-data')

    if (recentValue != content) {
        mainElement.childNodes[1].setAttribute('filp-front-data', content)
        mainElement.childNodes[1].style.display = 'block'

        setTimeout(function () {
            mainElement.childNodes[1].style.display = 'none'
        }, 350);
    }

    mainElement.childNodes[5].innerHTML = content
}

/**
 * add prefix zero to single digit values
 * @returns 
 */
function getDigit(value) {
    return value < 10 ? '0' + `${value}` : value;
}