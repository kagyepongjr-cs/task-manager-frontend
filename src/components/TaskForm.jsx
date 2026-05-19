import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [status, setStatus] = useState('To Do')
  const [due_date, setDueDate] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({ title, description, priority, status, due_date, category })
    setTitle('')
    setDescription('')
    setPriority('Medium')
    setStatus('To Do')
    setDueDate('')
    setCategory('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <input
        type="date"
        value={due_date}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select category</option>
        <option>Training</option>
        <option>Certifications</option>
        <option>Prospecting</option>
        <option>Research</option>
        <option>Meetings</option>
        <option>Projects</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm