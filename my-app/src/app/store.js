import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/boardReducer';
import playerReducer from '../reducers/playerReducer';

const game = combineReducers({boardReducer, playerReducer})

const store = createStore(game, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
export default store;
