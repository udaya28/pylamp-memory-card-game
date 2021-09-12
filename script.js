const cards = document.querySelectorAll('.card')
console.log(cards)


let firstCard, secondCard;
let isFirstCard = false

let lockBoard = false


const compareCards = () => {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        console.log("same")
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    } else {
        console.log("not same")
        lockBoard = true
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
            lockBoard = false
        }, 1000)
    }
}

const flipCard = (event) => {
    // console.log(event.currentTarget)

    if (lockBoard) return

    event.currentTarget.classList.toggle('flip')
    if (!isFirstCard) {
        isFirstCard = true;
        firstCard = event.currentTarget
    } else {
        isFirstCard = false;
        secondCard = event.currentTarget;
        compareCards()
    }
    console.log(firstCard, secondCard)

}


(() => {
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * 12)
    })
})()


cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})


