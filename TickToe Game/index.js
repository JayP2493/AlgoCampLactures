const readline = require('readline');

// Create an interface to read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Game {
    board;
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
        let isTrue = false;

        for (let i = 1; i <= this.board[0].length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (board[i][j] === x) {
                    count++;
                }
            }
            if (count === 3) {
                isTrue = true;
            }
            count = 0;
        }

        for (let i = 1; i <= this.board[0].length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (board[j][i] === x) {
                    count++;
                }
            }
            if (count === 3) {
                isTrue = true;
            }
            count = 0;
        }

        return isTrue;
    }
}

let ys = new Game();
ys.printBoard();
