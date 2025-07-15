"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Plus } from "lucide-react"
import { Rubik } from "next/font/google"

const rubik = Rubik({ subsets: ["latin"] })

interface Task {
  id: string
  name: string
  label: string
  createdAt: string
  completed: boolean
}

const labelColors: Record<string, string> = {
  frontend: "bg-gray-100 text-gray-800 border-gray-300",
  backend: "bg-gray-100 text-gray-800 border-gray-300",
  ux: "bg-gray-100 text-gray-800 border-gray-300",
  default: "bg-gray-100 text-gray-800 border-gray-300",
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([
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
  ])

  const [taskName, setTaskName] = useState("")
  const [taskLabel, setTaskLabel] = useState("")

  const addTask = () => {
    if (taskName.trim() && taskLabel.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        name: taskName.trim(),
        label: taskLabel.trim().toLowerCase(),
        createdAt: new Date().toLocaleDateString("pt-BR"),
        completed: false,
      }
      setTasks([...tasks, newTask])
      setTaskName("")
      setTaskLabel("")
    }
  }

  const completeTask = (taskId: string) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task)))
  }

  const completedTasksCount = tasks.filter((task) => task.completed).length

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className={`max-w-2xl mx-auto ${rubik.className}`}>
        <Card className="border-2 border-blue-200 border-none">
          <CardHeader>
            <header>
              <CardTitle className="text-2xl font-bold mb-6 text-[rgba(0,23,71,1)]">Board de tarefas</CardTitle>

              <div className="flex gap-3 mb-6">
                <Input
                  placeholder="Nome da tarefa"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="flex-1"
                />
                <Input
                  placeholder="Etiqueta"
                  value={taskLabel}
                  onChange={(e) => setTaskLabel(e.target.value)}
                  className="w-32"
                />
                <Button onClick={addTask} className="bg-blue-500 hover:bg-blue-600 text-white px-4" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </header>
          </CardHeader>

          <main>
            <CardContent className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`font-medium ${task.completed ? "text-gray-400 line-through" : "text-[#001747]"}`}>
                        {task.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={labelColors[task.label] || labelColors.default}>
                        {task.label}
                      </Badge>
                      <span className="text-sm text-gray-500">Criado em: {task.createdAt}</span>
                    </div>
                  </div>

                  <div className="ml-4">
                    {task.completed ? (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    ) : (
                      <Button
                        onClick={() => completeTask(task.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
                      >
                        Concluir
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </main>

          <footer>
            <div className="text-right text-sm text-gray-500 mt-6 p-4">
              {completedTasksCount} tarefa{completedTasksCount !== 1 ? "s" : ""} concluída
              {completedTasksCount !== 1 ? "s" : ""}
            </div>
          </footer>
        </Card>
      </div>
    </div>
  )
}
