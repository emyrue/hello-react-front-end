import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  greeting: 'Hi',
};

function rootReducer(state, action) {
  switch (action.type) {
    case 'GET_GREETING_SUCCESS':
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}
