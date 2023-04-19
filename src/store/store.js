import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

export const store = createStore(reducer);

const listener = () => {
    localStorage.setItem('store', JSON.stringify(store.getState()))
    console.log('ns',store.getState());
  };

  // Listener
  store.subscribe(listener);

