import TaskItem from './TaskItem';
import { useTasks } from '../store/taskContext';

const TaskList = () => {
  const { tasks } = useTasks();
  return (
    <div className="task-list">
      {tasks.length === 0 ? <p>No tasks yet!</p> : 
        tasks.map(task => <TaskItem key={task.id} task={task} />)}
    </div>
  );
};
export default TaskList;