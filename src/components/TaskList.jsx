import TaskCard from './TaskCard'

function TaskList({ tasks, onDelete, onStatusChange }) {
  const statuses = ['To Do', 'In Progress', 'Done']

  return (
    <div className="task-board">
      {statuses.map(status => (
        <div key={status} className="task-column">
          <h2 className={`column-header ${status.replace(' ', '-').toLowerCase()}`}>
            {status}
          </h2>
          <div className="task-list">
            {tasks
              .filter(task => task.status === status)
              .map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={onDelete}
                  onStatusChange={onStatusChange}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList