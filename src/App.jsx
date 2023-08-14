/* eslint-disable no-undef */
import  { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './components/Todoitem'
import TodoInput from './components/Todoinput';
import CompletedItem from './components/completeditem';

function App() {
  // const [count, setCount] = useState(0)
  var [todoItems, setTodoItems] = useState(['Buy Eggs', 'Hit the Gym', 'Take Shower']);
  var [completedItems, setCompletedItems] = useState([]);
  // var todoitem = ;

  function addTodo(todoItem) {
    setTodoItems([...todoItems, todoItem])  // shallow copying into new variable
  }

  function deleteTodo(todoItem){
    setTodoItems(todoItems.filter(e => e != todoItem));
  }

  function completedTodo(todoItem){
    // setTodoItems(todoItems.filter(e => e != todoItem));
    deleteTodo(todoItem);
    setCompletedItems([...completedItems, todoItem]);
    
  }

  function deleteCompletedTodo(todoItem){
    setCompletedItems(completedItems.filter(e => e != todoItem));
  }


  return (
    <>
      <div className='title'>
        <h1>
          ToDo List
        </h1>
      </div>
      <div>
        <TodoInput onAddItem={addTodo} />
      </div>
      <h2>To Do</h2>
      <hr></hr>
      <div>
        {/* <Todolist title = { todoitem[0] } />
        <Todolist title = { todoitem[1] } />
        <Todolist title = { todoitem[2] } /> */}
        {
          todoItems.map(todo => <TodoItem key={todo} title={todo} onDelete={deleteTodo} onComplete={completedTodo} /> )
        }
      </div>
      <hr></hr>
      <h2>Completed</h2>
      <div>
        {
          completedItems.map(todo => <CompletedItem key={todo} title={todo} onDelete={deleteCompletedTodo} /> )
        }
      </div>
    </>
  )
}

export default App
