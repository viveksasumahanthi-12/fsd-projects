import React, { useState, useEffect } from "react";
import "todos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddOrUpdate = () => {
    if (task.trim() === "") return;

    if (editId) {
      if (window.confirm("Do you really want to update this task?")) {
        setTodos(
          todos.map((todo) =>
            todo.id === editId ? { ...todo, text: task } : todo
          )
        );
        toast.success("✅ Task updated successfully!");
      }
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      toast.success("✅ Task added successfully!");
    }
    setTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddOrUpdate();
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
      toast.error("🗑️ Task deleted!");
    }
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setTask(todoToEdit.text);
    setEditId(id);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTodos([]);
      setEditId(null);
      setTask("");
      toast.info("🧹 All tasks cleared!");
    }
  };

  return (
    <div className="todos-page">
      <h2>✅ Todos Application</h2>

      {/* Input Section */}
      <div className="todo-input">
        <input
          type="text"
          placeholder={editId ? "Update your task..." : "Enter a task..."}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleAddOrUpdate}>
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>

      {/* Todo List */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <div className="actions">
              <button className="edit-btn" onClick={() => handleEdit(todo.id)}>
                ✏️
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(todo.id)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Clear All Button */}
      {todos.length > 0 && (
        <button className="clear-btn" onClick={handleClearAll}>
          🗑️ Clear All Tasks
        </button>
      )}

      {/* ✅ Toast Container */}
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default Todos;

