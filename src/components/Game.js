import React, { Component } from 'react'
import Board from './Board'


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default class Game extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hell0: "hello",
        x:  localStorage.getItem("fistPlayer"),
        y:  localStorage.getItem("secondPlayer"),
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      };
    }
    // changeColor(){}


    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    function refreshPage() {
    //window.location.reload();
     window.location.replace("/");   
     //  window.open("/");
    }
    let status;
    if (winner) {
      if(winner === "X"){
        status = window.confirm(`Winner is ${this.state.x}  Do you want to start game??`);
        if(status){
          refreshPage();
        }
      }
      else{
        status = window.confirm(`Winner is ${this.state.y}  Do you want to start game??`);
        if(status){
          refreshPage();
        }
      }
    } else {
      status = "Next player: " + (this.state.xIsNext ? `${this.state.x}` : `${this.state.y}`);
    }

    return (
      <div className="game containers">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          
        </div>
      </div>
    );
  }
}
