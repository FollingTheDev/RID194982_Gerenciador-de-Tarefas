import { createTaskItem } from "./components/task-item.js"

document.addEventListener("DOMContentLoaded", () => {
  const taskNameInput = document.getElementById("task-name-input")
  const taskLabelInput = document.getElementById("task-label-input")
  const addTaskButton = document.getElementById("add-task-button")
  const taskList = document.getElementById("task-list")
  const completedTasksCounter = document.getElementById("completed-tasks-counter")

  let tasks = [
    {
      id: "1",
      name: "Implementar tela de listagem de tarefas",
      label: "frontend",
      createdAt: "21/08/2024",
      completed: false,
    },
    {
      id: "2",
      name: "Criar endpoint para cadastro de tarefas",
      label: "backend",
      createdAt: "21/08/2024",
      completed: false,
    },
    {
      id: "3",
      name: "Implementar protótipo da listagem de tarefas",
      label: "ux",
      createdAt: "21/08/2024",
      completed: true,
    },
  ]

  function renderTasks() {
    taskList.innerHTML = "" // Clear existing tasks
    tasks.forEach((task) => {
      const taskItemElement = createTaskItem(task, completeTask)
      taskList.appendChild(taskItemElement)
    })
    updateCompletedTasksCounter()
  }

  function addTask() {
    const name = taskNameInput.value.trim()
    const label = taskLabelInput.value.trim().toLowerCase()

    if (name && label) {
      const newTask = {
        id: Date.now().toString(),
        name: name,
        label: label,
        createdAt: new Date().toLocaleDateString("pt-BR"),
        completed: false,
      }
      tasks.push(newTask)
      taskNameInput.value = ""
      taskLabelInput.value = ""
      renderTasks()
    }
  }

  function completeTask(taskId) {
    tasks = tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task))
    renderTasks()
  }

  function updateCompletedTasksCounter() {
    const completedCount = tasks.filter((task) => task.completed).length
    completedTasksCounter.textContent = `${completedCount} tarefa${completedCount !== 1 ? "s" : ""} concluída${completedCount !== 1 ? "s" : ""}`
  }

  // Event Listeners
  addTaskButton.addEventListener("click", addTask)
  taskNameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask()
  })
  taskLabelInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask()
  })

  // Initial render
  renderTasks()
})
