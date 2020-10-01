import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { reset, selectCell } from '../../store/actions/moves';
import { createBoard } from '../../utils';

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

const initialState = createBoard(3)

export const Board = () => {
  const board = useSelector(selectBoard)
  const game = useSelector(selectGame)
  const dispatch = useDispatch()

  const isInitialState = JSON.stringify(board) === JSON.stringify(initialState)

  return (
    <div className="flex-wrapper">
      <div className="Board mt">
        Board
        <div className="outer-border mt">
          {board.map((boardRow, rowIndex) => (
            <div key={`board-row-${rowIndex}`} className="board-row">
              {boardRow.map((boardItem, columnIndex) => (
                <div key={`board-row-${rowIndex}-${columnIndex}`} className="board-item" onClick={() => {
                  if(!game.winner) {
                    return dispatch(
                    selectCell(
                      game.currentPlayer,
                      rowIndex,
                      columnIndex
                    )
                  )}}}>
                  {boardItem}
                  </div>
              ))}
            </div>
          ))}
        </div>
        {game.winner && <div className="mt">{game.winner} is the winner</div>}
        {!game.winner && !board.flat().every(Boolean) && <div className="mt">Player {game.currentPlayer}</div>}
        {!game.winner && board.flat().every(Boolean) && <div className="mt">It's a Draw!</div>}
        {!isInitialState && <button className="reset-button mt" onClick={() => dispatch(reset())}>reset</button>}
      </div>
    </div>
  )
}
