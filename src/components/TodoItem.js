import React from 'react'

const TodoItem = (props) => {
  return (

    <div className="card my-3" style={{ width: "18rem" }}>
      {/* <img src="" className="card-img-top" alt="Todo Image" /> */}
      <div className="card-body">
        <h5 className="card-title">{props.todo.title}</h5>
        <p className="card-text">{props.todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={() => { props.onDelete(props.todo) }}>Delete</button>
      </div>
    </div>


  )
}

export default TodoItem
