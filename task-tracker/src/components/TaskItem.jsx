import { useTasks } from '../store/taskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleComplete } = useTasks();
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
    </div>
  );
};
export default TaskItem;