import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTodo } from '../context/TodoContext' //Accede al contexto

const AddTodoScreen = () => {
  const [newTask, setNewTask] = useState('')
  const { addTodo } = useTodo() //Obtiene la función addTodo
  const navigation = useNavigation()

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTodo(newTask) //Agrega la nueva tarea al contexto
      setNewTask('') //Limpia el input
      navigation.goBack() //Regresa a la pantalla de Home
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Escribe una tarea"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Agregar Tarea" onPress={handleAddTask} />
    </View>
  )
}

export default AddTodoScreen