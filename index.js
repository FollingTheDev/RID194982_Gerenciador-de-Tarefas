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

  const labelColors = {
    frontend: "bg-gray-100 text-gray-800 border-gray-300", // These are Tailwind classes, will be mapped to CSS classes
    backend: "bg-gray-100 text-gray-800 border-gray-300",
    ux: "bg-gray-100 text-gray-800 border-gray-300",
    default: "bg-gray-100 text-gray-800 border-gray-300",
  }

  function renderTasks() {
    taskList.innerHTML = "" // Clear existing tasks
    tasks.forEach((task) => {
      const taskItem = document.createElement("div")
      taskItem.className = "task-item"
      taskItem.dataset.id = task.id

      const taskInfo = document.createElement("div")
      taskInfo.className = "task-info"

      const taskNameGroup = document.createElement("div")
      taskNameGroup.className = "task-name-group"

      const taskName = document.createElement("h3")
      taskName.className = `task-name ${task.completed ? "completed" : ""}`
      taskName.textContent = task.name

      taskNameGroup.appendChild(taskName)
      taskInfo.appendChild(taskNameGroup)

      const taskMeta = document.createElement("div")
      taskMeta.className = "task-meta"

      const badge = document.createElement("span")
      badge.className = `badge ${labelColors[task.label] || labelColors.default}`
      badge.textContent = task.label

      const dateSpan = document.createElement("span")
      dateSpan.className = "task-date"
      dateSpan.textContent = `Criado em: ${task.createdAt}`

      taskMeta.appendChild(badge)
      taskMeta.appendChild(dateSpan)
      taskInfo.appendChild(taskMeta)

      taskItem.appendChild(taskInfo)

      const taskActions = document.createElement("div")
      taskActions.className = "task-actions"

      if (task.completed) {
        const completedIcon = document.createElement("div")
        completedIcon.className = "completed-icon"
        completedIcon.innerHTML = "&#10003;" // Checkmark icon
        taskActions.appendChild(completedIcon)
      } else {
        const completeButton = document.createElement("button")
        completeButton.className = "complete-button"
        completeButton.textContent = "Concluir"
        completeButton.addEventListener("click", () => completeTask(task.id))
        taskActions.appendChild(completeButton)
      }

      taskItem.appendChild(taskActions)
      taskList.appendChild(taskItem)
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
