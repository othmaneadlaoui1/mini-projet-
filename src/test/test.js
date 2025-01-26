// App.js
import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Définir l'état initial
const initialState = {
  count: 0,
};

// Créer un réducteur
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Créer le magasin Redux
const store = createStore(counterReducer);

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrémenter</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Décrémenter</button>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Application Redux</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;