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

  const [value, setValue] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text:value, isCompleted:false}];
    setTodos(newTodos);
    setValue('');
  }
  return(
    <>
      {todos.map((todo, i) => <div className="todo" key={i}>{todo.text}</div>)}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo ..."
          onChange={e => setValue(e.target.value)}
          />
      </form>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
