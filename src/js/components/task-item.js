export function createTaskItem(task, completeTaskCallback) {
  const labelColors = {
    frontend: "bg-gray-100 text-gray-800 border-gray-300",
    backend: "bg-gray-100 text-gray-800 border-gray-300",
    ux: "bg-gray-100 text-gray-800 border-gray-300",
    default: "bg-gray-100 text-gray-800 border-gray-300",
  }

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
    const checkImage = document.createElement("img")
    checkImage.src = "../../public/images/check.svg" // Corrected path for local file system
    checkImage.alt = "Task Completed"
    completedIcon.appendChild(checkImage)
    taskActions.appendChild(completedIcon)
  } else {
    const completeButton = document.createElement("button")
    completeButton.className = "complete-button"
    completeButton.textContent = "Concluir"
    completeButton.addEventListener("click", () => completeTaskCallback(task.id))
    taskActions.appendChild(completeButton)
  }

  taskItem.appendChild(taskActions)
  return taskItem
}
