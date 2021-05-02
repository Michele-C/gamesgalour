document.addEventListener('DOMContentLoaded' , () => {

    //card array

    const cardArray = [ 
        { name: 'purple',
          img: 'images/purple.png'
    },
    {   name: 'pink',
        img: 'images/pink.png'
    },

    {
        name: 'red',
        img: 'images/red.png'
    },
    {

        name: 'blue',
        img: 'images/blue.png'
    },
    {
        name: 'orange',
        img: 'images/orange.png'
    },
    {
        name: 'rose',
        img: 'images/rose'
    },
    {
    name: 'purple',
        img: 'images/purple.png'
    },
    {

        name: 'pink',
        img: 'images/pink.png'
    },

    {
        name: 'red',
        img: 'images/red.png'
    },
    {

        name: 'blue',
        img: 'images/blue.png'
    },
    {
        name: 'orange',
        img: 'images/orange.png'
    },
    {
        name: 'rose',
        img: 'images/rose'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')

const resultDisplay = document.querySelector('#result')

let cardChosen = []
let cardChosenID = []
let cardWon = []

//create board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++)
    {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.jpeg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
    }
}
 
function checkForMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenID[0]
    const optionTwoId = cardChosenID[1]

    if (optionOneId == optionTwoId) {

        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('YOu have clicked on the same image!')
}
else if (cardChosen[0] === cardChosen[1]){
    alert('You have found a match')
    cards[optionOneId].setAttribute('src', 'images/grey.png')
    cards[optionTwoId].setAttribute('src', 'images/grey.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
cardWon.push(cardsChosen)

} else {
    cards[optionOneId].setAttribute('src',  'images/blank.png')
    cards[optionTwoId].setAttribute('src' , 'images/blank.png')
    alert('Sorry try again ') 

}
cardChosen = []
cardChosenID =[]
resultDisplay.textContent = cardWon.length
if (cardWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congrats you found them all!'
}

}


// flip your card

function flipCard() {
let cardId = this.getAttribute('data-id')
cardChosenID.push(cardId)
cardChosen.push (cardArray[cardId].name)
this.setAttribute('src', cardArray[cardId].img)
if (cardChosen.length ===2) {
    setTimeout (checkForMatch, 500)

} 
}

createBoard()

})