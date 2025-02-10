import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './pantallas/pantallaHome'
import AddTodoScreen from './pantallas/pantallaAddTodo'
import { TodoProvider } from './context/TodoContext' // Asegúrate de que TodoProvider esté aquí
import { RootTabParamList } from './types' // Importa el tipo de navegación

const Tab = createBottomTabNavigator<RootTabParamList>() //Uso del tipo de navegación

const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="AddTodo" component={AddTodoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TodoProvider>
  )
}

export default App