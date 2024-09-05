import React, { useState } from 'react';

const AddTodo = ({ addTodo, showAlert }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            showAlert("Title and Description cannot be empty!");
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container my-4'>
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control" 
                        name='title' 
                        id="title" 
                        placeholder="Enter title here..." 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        name='description' 
                        id="description" 
                        rows="3"
                        placeholder="Enter description here..."
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </form>
        </div>
    );
}

export default AddTodo;
