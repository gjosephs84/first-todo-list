function App(){
  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }
  
  return(
    <>
      <ToDo/>
      <TodoForm addTodo={addTodo}/>
      
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
