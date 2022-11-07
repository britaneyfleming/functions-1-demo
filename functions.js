let jonSnowHealth = 100

//converting to string
//jonSnowHealth = String(jonSnowHealth)
//jonSnowHealth = toString(jonSnowHealth)

//converting to a number
//jonSnowHealth = parseInt(jonSnowHealth)

//converting to a boolean
//jonSnowHealth = Boolean(jonSnowHealth)

//converting using string coercion/concatenation
//jonSnowHealth = jonSnowHealth + 'health'

//jonSnowHealth = 'health - ' + jonSnowHealth

console.log(jonSnowHealth)

let theWinnerIs = 'Jamie is the winner'

//replace
let newWinner =theWinnerIs.toLowerCase().replace('jamie', 'Jon')

console.log(newWinner)

//includes
if(newWinner.toLowerCase().includes('jon')){
    console.log('replaces successfully')
} else {
    console.log('not replaced')
}


//convert to kebab-case eg. Jon-is-the-winner
//let newWinnerReplace = newWinner.replaceAll(' ', '-')
//let newWinnerLower = newWinner.toLowerCase()
//let newWinnerLowerSplit = newWinnerLower.split(' ')
//let newWinnerKebab = newWinnerLowerSplit.join (' ')

let newWinnerKebab = newWinner.toLowerCase().split(' ').join(' ')

console.log(newWinnerKebab)

//functions

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('Jon is alive!')
    } else {
        console.log('RIP Jon Snow')
    }
}

isJonAlive()

function surpriseAttack(attack){
    jonSnowHealth -= attack
    //the same
    //jonSnowHealth = jonSnowHealth - attack
}
surpriseAttack(20)
surpriseAttack(10)
surpriseAttack(40)
surpriseAttack(40)
//let remainPlusShield = surpriseAttack(18) + 50;


//multiple parameters can be used
function greeting(person1,person2){
    console.log('${person1} and ${person2} are saying hello to each other')
}

greeting('Ned','Jon')

//functions with return

function rollDice(){
    let possibleRolls = [1, 2, 3, 4, 5, 6]
    let randomIndex = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomIndex]
}

//console.log(firstRoll, secondRoll)

//THIS WILL ONLY WORK IN A FOR LOOP//
function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()

    return firstRoll + secondRoll
}

let multipliedRoll = diceMultiplier()
console.log(multipliedRoll)
console.log(firstRoll, secondRoll)