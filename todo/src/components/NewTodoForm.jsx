import React, { useState } from 'react'


const NewTodoForm = ({ addTodo }) => {

    const [newItem, setNewItem] = useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(newItem === '') return

        addTodo(newItem)

        setNewItem('')
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='new-item-form' action="">
          <div className='form-row'>
            <label htmlFor="itemaaa">New Item</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id='item' />
          </div>
          <button className='btn'>Add</button>
    </form>
  )
}

export default NewTodoForm