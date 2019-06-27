import React, { useEffect, useState } from 'react'

import { backend } from './backendAPI'

function Todos() {
  const [todos, setTodos] = useState(null)
  const [todo, setTodo] = useState('')

  useEffect(() => {
    let mounted = true
    const callApi = async () => {
      const fetchTodos = await backend()

      if (mounted) {
        setTodos(fetchTodos)
      }
    }
    callApi()

    return () => {
      mounted = false
    }
  }, [])

  const handleChange = e => {
    setTodo(e.target.value)
  }

  return (
    <>
      <h2>Todos List</h2>
      <input
        type='text'
        name='todo'
        id=''
        value={todo}
        onChange={handleChange}
      />
      <div>
        {!todos ? (
          <p>Loading...</p>
        ) : (
          todos.map(todo => (
            <ul key={todo.title}>
              <li>
                {todo.title} - {todo.status}
              </li>
            </ul>
          ))
        )}
      </div>
    </>
  )
}

export default Todos
