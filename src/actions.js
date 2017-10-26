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

export const removeTodo = (todo, text, user) => {
    //this.todos = this.todos.filter(item => item !== todo);
    //this.inform();

    let oldList = store.getState().todos.filter(item => item !== todo);
    const newList = oldList.splice({
       id: oldList.length,
       text: text,
       user: user
    });
    store.setState({
       todos: oldList
    });
}

