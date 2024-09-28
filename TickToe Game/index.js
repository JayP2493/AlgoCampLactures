const readline = require('readline');

class Player {
    name;
    playerScores;
    totalScore;

    constructor(name) {
        this.name = name;
        this.playerScores = [];
        this.totalScore = 0;
        this.sign = "X";
    }

    printScore() {
        console.log(`${name} won: ${this.totalScore} games`);
    }

    addName(name) {
        this.name = name;
    }

    addPlayerScore(won) {
        if (won) {
            this.playerScores.push("Won");
            this.totalScore++;
        } else {
            this.playerScores.push("Lost");
        }
    }
}

class Tic_board {
    constructor() {
        this.board = [["_","_","_"],["_","_","_"],["_","_","_"]];
    }

    printBoard () {
        console.log(`|__${this.board[0][0]}__||__${this.board[0][1]}__||__${this.board[0][2]}__|`);
        console.log(`|__${this.board[1][0]}__||__${this.board[1][1]}__||__${this.board[1][2]}__|`);
        console.log(`|__${this.board[2][0]}__||__${this.board[2][1]}__||__${this.board[2][2]}__|`);
    }

    checkWin (addSign) {
        let continuousBox = 0

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                if (this.board[i][j] === addSign) {
                    continuousBox++;
                }
            }
        }

        if (continuousBox === 3) {
            return true;
        } else {
            continuousBox = 0;
        }

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                if (this.board[j][i] === addSign) {
                    continuousBox++;
                }
            }
        }

        if (continuousBox === 3) {
            return true;
        } else {
            continuousBox = 0
        }

        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][i] === addSign) {
                continuousBox++;
            }
        }

        if (continuousBox === 3) {
            return true;
        } else {
            continuousBox = 0
        }

        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][this.board.length-i-1] === addSign) {
                continuousBox++;
            }
        }

        if (continuousBox === 3) {
            return true;
        } else {
            return false;
        }
    }

    resetBoard () {
        this.board = [["_","_","_"],["_","_","_"],["_","_","_"]];
    }

    checkMovePossible (row,col) {
        if ((typeof (row) !== "number" && typeof (col) !== "number") && (row <= 2 && col <= 2)) {
            console.log("Entered invalid number or not a number");
        } else {
            if(this.board[row][col] === "_") {
                return true;
            } else {
                console.log(`Already ${this.board[row][col]} is placed try something else`);
            }
        }
    }

    addSign (row,col,sign) {
        this.board[row][col] = sign;
    }
}

class Game {
    constructor() {
        this.player_A = new Player();
        this.player_B = new Player();
        this.player_A.sign = "X";
        this.player_B.sign = "O";
        this.moveCounter = 0;
        this.board = new Tic_board();
        this.history = [];
        this.player1 = this.player_A;
        this.player2 = this.player_B;
        this.lastGameWon = false;
    }

    newGame () {
        console.log("Creating game...");
        process.stdout.write('Enter Player 1 name');

        process.stdin.on('data', function(data) {
            this.player_A.addName(data.toString().trim());
            process.exit(); // End the program after receiving input
        });

        process.stdout.write('Enter Player 2 name');

        process.stdin.on('data', function(data) {
            this.player_B.addName(data.toString().trim());
            process.exit(); // End the program after receiving input
        });
        this.board.printBoard();
        this.player1 = this.player_A;
        this.player2 = this.player_B;
    }

    makeMover(player,row,col) {
        this.board.addSign(row,col,player.sign);
        this.board.printBoard();
    }

    win(player) {
        console.log(`${player.name} win!`);
        this.history.push(player.name);
        console.log(this.history);
        player.addPlayerScore(true);
    }

    lost(player) {
        player.addPlayerScore(false);
    }

    draw() {
        console.log("Game is draw!!!");
    }

    resetBoard() {
        this.board.resetBoard();
        this.moveCounter = 0;
    }

    playerSwap(player) {
        if (player !== this.player1) {
            [this.player1, this.player2] = [this.player2, this.player1];
        }
    }

    startNewGame () {
        this.newGame();

        while (this.moveCounter <= 9) {

            let gameDone = false;

            this.moveCounter++;
            let player = undefined;
            let playernot = undefined;

            if (this.moveCounter%2 !== 0) {
                player = this.player1;
                playernot = this.player2;
            } else {
                player = this.player2;
                playernot = this.player1;
            }

            console.log(`${player.name}, Make your move`);


            let getRow = 0; // need function to add from console
            process.stdout.write('Add Row Number: ');

            process.stdin.on('data', function(data) {
                getRow = parseInt(data.toString().trim(), 10);
                process.exit(); // End the program after receiving input
            });

            let getCol = 0; // need function to add from console
            process.stdout.write('Add Row Number: ');

            process.stdin.on('data', function(data) {
                getCol = parseInt(data.toString().trim(), 10);
                process.exit(); // End the program after receiving input
            });

            if (!this.board.checkMovePossible(getRow,getCol)) {
                this.moveCounter--;
                continue;
            }

            this.makeMover(player, getRow, getCol);

            if (this.board.checkWin(player.sign)) {
                this.win(player);
                this.lost(playernot);
                this.playerSwap(playernot);
                gameDone = true;
            }

            if (this.moveCounter >= 9) {
                this.draw();
                gameDone = true;
            }

            if (gameDone) {
                console.log(`${this.player_A.name} your score is:`)
                this.player_A.printScore();
                console.log(`${this.player_B.name} your score is:`)
                this.player_B.printScore();

                console.log("Want to continue");

                let cont = "Y" // need function to add from console
                process.stdout.write('What is your name? ');

                process.stdin.on('data', function(data) {
                    cont = data.toString().trim()// End the program after receiving input
                });

                if (cont === "Y") {
                    this.resetBoard();
                } else {
                    console.log("Closing Game.....")
                    break;
                }
            }
        }
    }
}

let lt = new Game();
lt.startNewGame();