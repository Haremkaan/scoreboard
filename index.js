
let firstCard = 9
let lastCard = 6

let sum = firstCard + lastCard

if (sum > 21) {
    console.log("You are still in the Game")
} else if (sum === 21) {
    console.log("you got a black jack")
}else (sum < 21) {
    console.log("you won.")
}