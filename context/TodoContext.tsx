import React, { createContext, useState, ReactNode } from 'react'

type TodoContextType = {
  todos: string[] //Lista de tareas
  addTodo: (todo: string) => void //Función para agregar tarea
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

type TodoProviderProps = {
  children: ReactNode
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<string[]>([])

  const addTodo = (todo: string) => {
    setTodos((prevTodos) => [...prevTodos, todo])
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

//Hook para acceder al contexto
export const useTodo = () => {
  const context = React.useContext(TodoContext)
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  return context
}