import store from './store';

export const addTodo = (text, user) => {
   let oldList = store.getState().todos;
   const newList = oldList.concat({
      id: oldList.length,
      text: text,
      user: user
   });
   store.setState({
      todos: newList
   });
};

export const deleteUser = (e) => {
    let parent = e.target;
    console.log(parent);
}