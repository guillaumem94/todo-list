// Imports
import "./App.css";
import { FC, ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";
import { TodoTask } from "./components/TodoTask";

// Component
export const App: FC = () => {
  // State for managing user input
  const [task, setTask] = useState<string>("");
  // State for managing todo list
  const [todoList, setTodoList] = useState<ITask[]>([]);

  // Update user input while they type
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  // Add new item to list
  const addTask = (): void => {
    const newTask = { taskName: task };

    if (task) {
      setTodoList([...todoList, newTask]);
      setTask("");
    }
  };

  // Delete item from list
  const handleDelete = (itemToDelete: string): void => {
    setTodoList(
      todoList.filter((item) => {
        return item.taskName !== itemToDelete;
      })
    );
  };

  // Return statement
  return (
    <div className="App">
      <div className="task">
        {/* User input */}
        <input
          id="new-task"
          type="text"
          placeholder="Task..."
          value={task}
          onChange={handleChange}
        />

        {/* Button to add item */}
        <button id="add-task" onClick={addTask}>
          Add task
        </button>
      </div>

      <div className="todoList">
        {/* Display all items */}
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask task={task} key={key} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
};
