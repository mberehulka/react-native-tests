import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Product from './product'
import Products from '../services/products'

type ProductListState = {
  products: Product[]
}

export default class ProductsList extends Component<any, ProductListState> {
  constructor(props: any) {
    super(props)
    this.state = {
      products: Products.all()
    }
  }
  render() {
    return (
      <FlatList
        style={S.productsList}
        contentContainerStyle={S.productsListContainer}
        keyExtractor={item => item.props.name}
        data={this.state.products}
        renderItem={item =>
          <Product {...item.item.props}
            onPress={() => {
              this.props.navigation.navigate('ProductDetails', item.item)
            }}/>
        }
      />
    )
  }
}
const S = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
})