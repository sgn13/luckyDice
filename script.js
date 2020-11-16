const game = () => {

    let pScore = 0;
    let cScore = 0;



    const startGame = () => {

        const playBtn = document.querySelector('.intro button')
        const intro = document.querySelector('.intro')
        const game = document.querySelector('.match')

        playBtn.addEventListener('click', function () {
            game.style.display = 'flex'
            intro.style.display = "none"

        })

    }

    const playMatch = () => {
        const userChoice = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const reset = document.querySelector('.nill');
        const hands = document.querySelectorAll('.hands img')
        const computerChoice = ['one', 'two', 'three', 'four', 'five', 'six']

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = ''
            })
        })


        userChoice.forEach(option => {


            option.addEventListener('click', () => {
                const computerPlay = computerChoice[Math.floor(Math.random() * 6)];
                setTimeout(() => {
                    userChoice.forEach(opt => {
                        console.log(opt);
                        opt.disabled = true;
                        setTimeout(() => {
                            opt.disabled = false;
                            console.log(opt);


                        }, 3000);

                    });


                }, 500);

                setTimeout(() => {



                    compareHand(option, option.textContent, computerPlay)

                    // playerHand.src = `./images/${option.textContent}.png`;
                    computerHand.src = `./images/${computerPlay}.png`;
                    // userChoice.disabled = true;




                }, 700)


                // playerHand.style.animation = 'shakePlayer 2s ease'
                computerHand.style.animation = 'shakeComputer 2s ease'
            })
        })
    }

    const updateScore = () => {
        const playerS = document.querySelector('.player-score p');
        const computerS = document.querySelector('.computer-score p');

        playerS.textContent = pScore;
        computerS.textContent = cScore;
    }

    const compareHand = (bBtn, userChoice, computerChoice) => {
        const result = document.querySelector('.winner')



        if (userChoice === computerChoice) {
            result.style.color = "green"


            result.textContent = "WOW !!!!! YOU ARE EXTRA LUCKY TODAY!!!";

            // updateScore()
            return
        }



        else {

            // bBtn.style.background = 'red';

            result.style.color = "red";

            result.classList.add('fade-in')
            setTimeout(() => {
                result.classList.remove('fade-in')

            }, 700);

            result.textContent = "OHH NOO!!! BETTER LUCK NEXT TIME .";
            // cScore++;
            // updateScore()
            return

        }


    }

    startGame();
    playMatch();



}
game()