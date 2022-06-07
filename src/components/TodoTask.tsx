// Imports
import "./TodoTask.css";
import { ITask } from "../Interfaces";

// Interface
interface Props {
  task: ITask;
  handleDelete(itemToDelete: string): void;
}

// Component
export const TodoTask = ({ task, handleDelete }: Props) => {
  return (
    <div className="TodoTask">
      {/* Button to delete item */}
      <button
        id="delete-button"
        onClick={() => {
          handleDelete(task.taskName);
        }}
      >
        Delete
      </button>

      {/* Name of the todo item */}
      <div id="task-name">{task.taskName}</div>
    </div>
  );
};
