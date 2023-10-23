import React, { useContext } from 'react'
import { Text, Image, View, ScrollView, SafeAreaView, Button, StyleSheet } from 'react-native'
import { CartContext } from './cart'

export function ProductDetails({ route }: any) {
  const cart = useContext(CartContext)
  const product = route.params
  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={S.image} source={product.props.image}/>
        <View style={S.infoContainer}>
          <Text style={S.name}>{product.props.name}</Text>
          <Text style={S.price}>$ {product.props.price}</Text>
          <Text style={S.description}>{product.props.description}</Text>
            <Button onPress={() => cart.add(product)} title="Add to cart"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const S = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
})