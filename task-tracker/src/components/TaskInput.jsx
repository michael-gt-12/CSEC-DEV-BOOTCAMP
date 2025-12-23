import { useState } from 'react';
import { useTasks } from '../store/taskContext';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default TaskInput;