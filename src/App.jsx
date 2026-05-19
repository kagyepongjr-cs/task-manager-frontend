import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

const API = 'https://task-manager-backend-v7bl.onrender.com'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(`${API}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])

  const handleAdd = (task) => {
    fetch(`${API}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })
      .then(() => fetch(`${API}/tasks`)
        .then(res => res.json())
        .then(data => setTasks(data)))
  }

  const handleDelete = (id) => {
    fetch(`${API}/tasks/${id}`, { method: 'DELETE' })
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
  }

  const handleStatusChange = (id, newStatus) => {
    const task = tasks.find(t => t.id === id)
    fetch(`${API}/tasks/${id}`, {
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