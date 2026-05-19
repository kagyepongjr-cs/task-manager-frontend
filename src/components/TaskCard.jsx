function TaskCard({ task, onDelete, onStatusChange }) {
    return (
      <div className="task-card">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span className={`priority priority-${task.priority?.toLowerCase()}`}>
          {task.priority}
        </span>
        <p className="category">📁 {task.category}</p>
        <p className="due-date">📅 {task.due_date ? task.due_date.slice(0, 10) : 'No due date'}</p>
        <div className="task-actions">
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value)}
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      </div>
    )
  }
  
  export default TaskCard