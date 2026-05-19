import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])

  const handleAdd = (task) => {
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })
      .then(() => fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(data => setTasks(data)))
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' })
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
  }

  const handleStatusChange = (id, newStatus) => {
    const task = tasks.find(t => t.id === id)
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...task, status: newStatus })
    })
      .then(() => setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t)))
  }

  return (
    <div className="app">
      <header>
        <h1>CrowdStrike Internship Task Tracker</h1>
        <p>Austin, TX — Summer 2025</p>
      </header>
      <TaskForm onAdd={handleAdd} />
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  )
}

export default App