import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {

  let myStyle = {
    minHeight: "47.7vh"
  }

  return (
    <div className='container' style={myStyle}>
      <h2 className='text-center my-3'>Todos Items</h2>
      <div className='d-flex justify-content-around flex-wrap'>
        {props.todos.length === 0 ? "No todos to display" :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>


    </div>
  )
}

export default Todos
