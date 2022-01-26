function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }, 
    {
      text: 'finish mudding the dining room',
      isCompleted: false,
    },
    {
      text: 'stain the beams in the great room',
      isCompleted: false,
    },
    {
      text: 'feed the sourdough starter',
      isCompleted: false
    }       
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }
  
  return(
    <>
      {todos.map((todo, i) =>
      <ToDo index={i} key={i} todo={todo} remove={removeTodo}/>)}
      <TodoForm addTodo={addTodo}/>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
