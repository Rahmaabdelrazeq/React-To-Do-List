import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text }
    setTodos([...todos, newItem])
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {  
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleDeleteItem = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)  
    setTodos(newTodos)
  }

  return (
    <>
      <div className='App'>
        <h2>To Do List</h2>
        <div className='to-do-container'>
          <ul>
            {todos.map(({ text, completed }, index) => {  
              return (
                <div className=''>

                  <div className='div22' key={index}>  
                      <div>
                      <span className='span1'><li
                      className={completed ? "done" : ""}
                      onClick={() => handleItemDone(index)}
                    >
                      {text}
                    </li ></span>
                      </div>
                    <span onClick={() => handleDeleteItem(index)}> ❌</span>
                  </div>
                </div>
              )
            })}
          </ul>
          <input ref={inputRef} placeholder='Enter item...' />
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </div>
    </>
  )
}

export default App