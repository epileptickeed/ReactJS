import { useEffect, useState } from 'react'
import './styles.css'  
import NewTodoForm from './components/NewTodoForm'
import NewTodoList from './components/NewTodoList'

function App() {

  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem('ITEMS')
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos(currentTodos => {
      return[
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
      ]
  })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  const deleteTodo = (id) =>{
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div>
        <NewTodoForm addTodo={addTodo} />
        <h1 className='header'>ToDo list</h1>
        <NewTodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App
