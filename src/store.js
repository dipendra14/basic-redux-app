// store.js
import { createStore, combineReducers } from 'redux';
import reducer1 from './reducers/reducer1';
import reducer2 from './reducers/reducer2';

const rootReducer = combineReducers({
  data: reducer1,
  ui: reducer2,
});

const store = createStore(rootReducer);

export default store;
