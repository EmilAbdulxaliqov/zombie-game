const inquirer = require("inquirer")

let zombieHealth = 15;

let userHealth = 70;

let zombieChoice = () => {
    return Math.ceil(Math.random() * 5);
}

function playGame() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'Try it alive! Guess zombie choice [1 - 5]',
            choices: [1, 2, 3, 4, 5]
        }
    ]).then( (answer) => {
        let zombieNumber = zombieChoice();
        if (zombieNumber === answer.userChoice) {
            zombieHealth -= 5;

            console.log(`Your choice is correct!\n🧟‍♂️Zombie health ${zombieHealth} 👨‍💻Your health  ${userHealth}`);

        } else {
            userHealth -= answer.userChoice;

            console.log(`Your choice is not correct!\nZombie choice ${zombieNumber} Your choice ${answer.userChoice}\n🧟‍♂️Zombie's health  ${zombieHealth} 👨‍💻Your health  ${userHealth}`);

        }
        if (zombieHealth > 0 && userHealth > 0) {

            playGame();

        } else {

            if (zombieHealth <= 0) {
                console.log('You winnnnnnn');

            } else if (userHealth <= 0) {
                console.log('You lose');

            }
            
        }
        
    })
}

playGame();



