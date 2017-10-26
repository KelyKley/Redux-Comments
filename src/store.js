import createStore from 'redux-zero';

const TODOS = [
   {
      id: 0,
      user: 'Bendict Berner',
      text: 'Excellent'
   },
   {
      id: 1,
      user: 'Ana Banner',
      text: '¡Ohh mashaa!'
   },
   {
      id: 2,
      user: 'Nadya Diaz',
      text: 'Cool Code!'
   }
];

const initialState = {
   todos: TODOS,
   selectedTodo: -1
};

const store = createStore(initialState);
export default store;
