// Set the date we're counting down to
var countDownDate = new Date("Nov 30, 2023 15:37:25").getTime();

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
    const cardElement = document.querySelector(`.widget-card.${className}`)
    const titleElement  = document.querySelector(`.widget-card.${className} .details-title`)

    const attributeData = cardElement.getAttribute('data-num')
    const flipElement = document.querySelectorAll(`.widget-card.${className} .flip-card`)

    if(attributeData === null) {
        cardElement.setAttribute('data-num', content)
        titleElement .textContent = content;
    }

    if (attributeData != content) {
        cardElement.setAttribute('data-num', content)
        cardElement.childNodes[3].setAttribute('filp-front-data', attributeData)
        cardElement.childNodes[5].setAttribute('filp-front-data', attributeData)
        cardElement.childNodes[7].setAttribute('filp-front-data', attributeData)
        
        flipElement.forEach(item => {
            item.style.display = 'block'
        })
        setTimeout(() => {
            titleElement .textContent = content;
            cardElement.setAttribute('data-num', content)
            flipElement.forEach(item => {
                item.style.display = 'none'
            })
        }, 350)

    }
}

/**
 * add prefix zero to single digit values
 * @returns 
 */
function getDigit(value) {
    return value < 10 ? '0' + `${value}` : value;
}