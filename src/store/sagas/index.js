import { all, put, select, takeEvery } from 'redux-saga/effects'
import { calculateWinner } from '../../utils';
import { SELECT_CELL } from '../actions/moves';

function* checkWinner() {
  const state = yield select();
  const winner = calculateWinner(state.board.flat());
  if(winner) {
    yield put({ type: 'CHANGE_WINNER', winner });
  }
}

function* watchMoves() {
  yield takeEvery(SELECT_CELL, checkWinner)
}

export default function* rootSaga() {
  yield all([watchMoves()]);
}
