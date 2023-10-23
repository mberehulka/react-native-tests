import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CartContext } from './cart'

export function CartIcon({ navigation }: any) {
  const cart = useContext(CartContext)
  return (
    <View style={S.container}>
      <Text style={S.text} onPress={() => navigation.navigate('Cart')}>
        Cart ({cart.totalAmount()})
      </Text>
    </View>
  )
}

const S = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
})