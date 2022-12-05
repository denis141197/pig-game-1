'use strict';



// const png = ['/png/dice1.png', '/png/dice2.png','/png/dice3.png','/png/dice4.png','/png/dice5.png','/png/dice5.png', ]


let dice = document.querySelector('.dice')

const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')


const score0 = document.querySelector('#current--0')
const score1 = document.querySelector('#current--1')

score0.textContent = 0
score1.textContent = 0

let currentScore = 0
let activePlayer = 0
let totalScores = [0, 0] 

let isPlaying = true

function changeActivePlayer() {
  currentScore = 0
  document.getElementById(`current--${activePlayer}`).textContent = currentScore
  activePlayer = activePlayer ? 0 : 1
  player0.classList.toggle('player--active')
  player1.classList.toggle('player--active')
}


// ROLL DICE
  btnRoll.addEventListener('click', () => {
    if (isPlaying) {

    //generate dice number
    const random = Math.trunc(Math.random() * 6 + 1)

    //display number on dice
    dice.src = `dice${random}.png`
    
    // if num = 1 change player, if not, add to current score
    if (random !== 1) {
      currentScore = currentScore + random
      document.getElementById(`current--${activePlayer}`).textContent = currentScore

    } else {
      // change player
      changeActivePlayer()
    }
  }
})


// hold

btnHold.addEventListener('click', () => {
  if (isPlaying) {

  // add to total score from current score
  totalScores[activePlayer] += currentScore
  document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer]

  //if total score >= 100 you win, else switch active player
  if(totalScores[activePlayer] >= 100) {
    isPlaying = false
    document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner')
    document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active')
    document
    .querySelector(`#name--${activePlayer}`)
    .textContent = 'WINNER' 
    dice.classList.remove('dice')
  } else {
    changeActivePlayer()
  }
}
})

btnNew.addEventListener('click', () => {

  location.reload()

  // isPlaying = true



  // document.querySelector('#name--0').textContent = `Игрок 1`
  // document.querySelector('#name--1').textContent = `Игрок 2`
  // document.querySelector('.score').textContent = 0
  // document.querySelector('.current-score').textContent = 0
  // dice.classList.add('dice')
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--winner')
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.add('player--active')
  //   totalScores = [0, 0]


})


