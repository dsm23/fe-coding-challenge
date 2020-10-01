import { combineReducers } from "redux";
import { createBoard } from "../../utils";
import { CHANGE_WINNER, RESET, SELECT_CELL } from "../actions/moves";

export const board = (state = createBoard(3), action) => {
  switch (action.type) {
    case SELECT_CELL: {
      if (state[action.row][action.column]) {
        return state;
      }
      const newBoard = [...state];
      newBoard[action.row][action.col] = action.currentPlayer
      return newBoard
    }
    case RESET: {
      return createBoard(3);
    }
    default: {
      return state
    }
  }
}

const initialGameState = { currentPlayer: 'X', winner: null };

export const game = (state = { currentPlayer: 'X', winner: null }, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
      }
    }
    case CHANGE_WINNER: {
      return {
        ...state,
        winner: action.winner
      }
    }
    case RESET: {
      return initialGameState;
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  board,
  game
})
