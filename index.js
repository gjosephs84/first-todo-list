function App(){
  {/*
  Here to begin weith, we are setting our initial todos and their initial state */}
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
  
  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return(
    <>
      {todos.map((todo, i) => <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
      <TodoForm addTodo={addTodo}/>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
