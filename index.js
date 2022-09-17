let a = Math.floor(Math.random() * 100) + 1
console.log("#Guess The Number Game#");
let chances = 0;
let guess = 0;


while (chances < 100) {
    guess = prompt("What Do You Guess : ");
    chances++;
    if (guess == a) {
        console.log("You Have Guessed It Correctly and Your Score Is :", (100 - chances))
        break;
    }
    else if (a < guess) {
        console.log("The Actuall Number Is Less Than", guess);
    }
    else if (a > guess) {
        console.log("The Actuall Number Is Greater Than", guess)
    }

}
