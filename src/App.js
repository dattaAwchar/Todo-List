import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import Alert from './components/Alert';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    try {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    } catch (e) {
      initTodo = [];
      console.error("Error parsing localStorage 'todos':", e);
    }
  }

  const [todos, setTodos] = useState(initTodo);
  const [alertMessage, setAlertMessage] = useState(null);

  const onDelete = (todo) => {
    console.log("I am onDelete " + todo);
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    if (!title || !desc) {
      setAlertMessage("Title and Description cannot be empty!");
      return;
    }

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      },3000);
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [alertMessage]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Alert message={alertMessage}/>
      <Navbar title="Todos List" />


      <AddTodo addTodo={addTodo} showAlert={setAlertMessage} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
