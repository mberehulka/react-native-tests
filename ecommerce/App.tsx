import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CartProvider } from './src/components/cart'
import ProductsList from './src/components/productsList'
import { ProductDetails } from './src/components/productDetails'
import CartList from './src/components/cartList'
import { CartIcon } from './src/components/cartIcon'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList} 
            options={({ navigation }) => ({
              title: 'Products',
              headerTitleStyle: S.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>
            })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
            options={({ navigation }) => ({
              title: 'Product details',
              headerTitleStyle: S.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
            })} />
          <Stack.Screen name='Cart' component={CartList} 
            options={({ navigation }) => ({
              title: 'My cart',
              headerTitleStyle: S.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
            })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}
const S = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
})