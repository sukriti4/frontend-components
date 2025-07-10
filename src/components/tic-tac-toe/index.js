import { useState } from "react";
import "./style.css";
const TicTacToe = ({grids = 9}) => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
  const [board, setBoard] = useState(new Array(grids).fill(null));
  const WINNER_STATE = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]

  const checkWinner = (currentBoard) => {
    for(let i =0; i<WINNER_STATE.length ; i++){
      const [a,b,c] =  WINNER_STATE[i];
      if(currentBoard[a] && currentBoard[a] == currentBoard[b] && currentBoard[a] == currentBoard[c]){
        setIsWinner(true);
        return currentBoard[a];
      }
    }
    return null;
  }

  

  const handleClick = (index) => {

    const winner = checkWinner(board);
    if(winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index]= isXTurn ? "X" : "0";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    
  }

  const getMessage = () => {
    if(isWinner) {
      return `${isXTurn ? 'O Wins' : 'X Wins'}`;
    }
    return isXTurn ? "Player X's turn" : "Player O's turn"; 
  }
  return (
    <>
    <h2>{getMessage()}</h2>
    <section>
      {
        board.map((item, index) => (
          <button 
            key={index} 
            onClick={() => handleClick(index)}
            disabled = {item!=null ? true : false}
          >{item}</button>
        ))
      }
    </section>
    </>
    
  )
}

export default TicTacToe;