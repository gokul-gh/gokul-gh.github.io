import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const todosStorage = localStorage.getItem("todos");
    return todosStorage ? JSON.parse(todosStorage) : [];
  });

  const todoObj = {
    title: "",
    estimation: "",
    description: "",
  };
  const [newTodo, setNewTodo] = useState(todoObj);

  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState(todoObj);

  const handleEdit = (todo, editIndex) => {
    setNewTodo(todo);
    setEditIndex(editIndex);
    setErrors(todoObj);
  };

  const handleDelete = (todo) => {
    const deleteTodo = todos.filter((e) => e != todo);
    setTodos(deleteTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AddTodo
                todoObj={todoObj}
                todos={todos}
                newTodo={newTodo}
                editIndex={editIndex}
                setNewTodo={setNewTodo}
                setTodos={setTodos}
                errors={errors}
                setErrors={setErrors}
                setEditIndex={setEditIndex}
              />
            }
          />
          <Route
            path="/lists"
            element={
              <TodoList
                todos={todos}
                editIndex={editIndex}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
