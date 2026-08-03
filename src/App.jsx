import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <h1>📝 To Do List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <h3>Total Tasks : {tasks.length}</h3>

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      )}

      {tasks.length === 0 ? (
        <p className="empty">No Tasks Available</p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              <span>{item}</span>

              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;