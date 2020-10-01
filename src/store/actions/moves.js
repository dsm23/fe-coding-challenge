export const CHANGE_WINNER = 'CHANGE_WINNER'
export const SELECT_CELL = 'SELECT_CELL'
export const RESET = 'RESET'

export function selectCell(currentPlayer, row, col) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col
  }
}

export function reset() {
  return {
    type: RESET,
  }
}
