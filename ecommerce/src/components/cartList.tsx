import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { CartContext,  } from './cart'

export default function CartList() {
  const cart = useContext(CartContext)
  function totals() {
    return (
      <View>
        <Text style={[S.lineLeft, S.lineTotal]}>Total</Text>
        <Text style={S.lineRight}>$ {cart.totalPrice()}</Text>
      </View>
    )
  }
  function renderItem({ item }: any) {
    return (
      <View style={S.cartLine}>
        <Text style={S.lineLeft}>{item.product.props.name} x {item.amount}</Text>
        <Text style={S.lineRight}>$ {item.totalPrice()}</Text>
      </View>
    )
  }
  return (
    <FlatList
      style={S.itemsList}
      contentContainerStyle={S.itemsListContainer}
      data={cart.items()}
      renderItem={renderItem}
      keyExtractor={item => item.product.props.name}
      ListFooterComponent={totals}
    />
  )
}

const S = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333'
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
})