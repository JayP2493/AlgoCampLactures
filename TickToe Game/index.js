const readline = require('readline');

// Create an interface to read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Game {
    board;
    userA;
    userB;
    stepCount;
    userA_Score = 0
    userB_Score = 0

    constructor() {
        this.board = [["_","_","_"],["_","_","_"],["_","_","_"]];
    }

    printBoard() {
        console.log(
            `|__${this.board[0][0]}__|__${this.board[0][1]}__|__${this.board[0][2]}__|`
        )
        console.log(
            `|__${this.board[1][0]}__|__${this.board[1][1]}__|__${this.board[1][2]}__|`
        )
        console.log(
            `|__${this.board[2][0]}__|__${this.board[2][1]}__|__${this.board[2][2]}__|`
        )
    }

    checkWinning(x) {
        let count = 0;

        for (let i = 0; i < this.board[0].length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (this.board[i][j] === x) {
                    count++;
                }
            }
            if (count === 3) {
                return true;
            }
            count = 0;
        }

        for (let i = 0; i < this.board[0].length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (this.board[j][i] === x) {
                    count++;
                }
            }
            if (count === 3) {
                return true;
            }
            count = 0;
        }

        for (let i = 0; i < this.board[0].length; i++) {
            if (this.board[0][2] === x) {
                count++;
            }
            if (this.board[1][1] === x) {
                count++;
            }
            if (this.board[0][2] === x) {
                count++;
            }

            if (count === 3) {
                return true;
            }
        }

        for (let i = 2; i >= 0; i--) {
            if (this.board[i][i] === x) {
                count++;
            }

            if (count === 3) {
                return true;
            }
        }

        return false;
    }

    resetGame() {
        this.board = [["_","_","_"],["_","_","_"],["_","_","_"]];
    }

    endGame() {
        this.resetGame();
        console.log(`User one score is: ${this.userA_Score}`);
        console.log(`User two score is: ${this.userB_Score}`);
    }

    getInput_Col(x) {
        rl.question(`Player ${x}, enter your move col: `, input => {
             let col = input;
             return col;
        });
    }

    getInput_Row(x) {
        rl.question(`Player ${x}, enter your move row: `, input => {
            let row = input;
            return row;
        });
    }

    getName() {
        rl.question(`Player player one, enter your name: `, input => {
            let name = input;
            return name;
        });
    }

    startGame() {
        console.log("Let's Start Game!!!");
        this.userA = this.getName();
        this.userB = this.getName();

        let isWon = false;

        // while (!isWon) {
        //     this.printBoard();
        //
        // }

    }
}

let ys = new Game();
ys.printBoard();
ys.startGame();
console.log(ys.userA)
console.log(ys.userB)J
