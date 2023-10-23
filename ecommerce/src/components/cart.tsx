import {createContext, useState } from 'react'
import Product from './product'

export class CartItem {
  amount = 1
  constructor(
    readonly product: Product
  ) {}
  totalPrice() {
    return this.product.props.price * this.amount
  }
}

export class Cart {
  private readonly state = useState<CartItem[]>([])
  items() { return this.state[0] }
  add(product: Product) {
    var found = false
    var new_items = this.items().map(item => {
      if(item.product.props.name == product.props.name) {
        found = true
        item.amount++
      }
      return item
    })
    if (!found)
      new_items.push(new CartItem(product))
    this.state[1](new_items)
  }
  totalAmount() {
    return this.items().reduce((sum, item) => sum + item.amount, 0)
  }
  totalPrice() {
    return this.items().reduce((sum, item) => sum + item.totalPrice(), 0)
  }
}

export function CartProvider(props: any) {
  const cart = new Cart()
  return (
    <CartContext.Provider value={cart}>
      {props.children}
    </CartContext.Provider>
  )
}

export const CartContext = createContext<Cart>(null!)