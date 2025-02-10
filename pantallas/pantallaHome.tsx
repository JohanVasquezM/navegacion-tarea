import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTodo } from '../context/TodoContext' //Uso del contexto
import { RootTabParamList } from '../types' //Importo el tipo de rutas

type NavigationProp = StackNavigationProp<RootTabParamList, 'Home'> //Define el tipo de navegación

const HomeScreen = () => {
  const { todos } = useTodo() // Obtenemos las tareas del contexto
  const navigation = useNavigation<NavigationProp>() //Usa el tipo de navegación

  return (
    <View>
      <Text>Lista de Tareas</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text>{item}</Text>} //Renderizado de tareas
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Agregar Tarea"
        onPress={() => navigation.navigate('AddTodo')} //Usa la navegación con el tipo correcto
      />
    </View>
  )
}

export default HomeScreen