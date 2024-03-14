import React from 'react'
import ToDoItem from './ToDoItem'

const NewTodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className='list'>
          {todos.length === 0 && 'No todos'}
          {todos.map(todo => {
            return (
                <ToDoItem 
                    {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
                />
            )
          })}
          
    </ul>
  )
}

export default NewTodoList