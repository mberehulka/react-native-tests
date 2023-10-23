import Product, { CProduct } from "../components/product"

const PRODUCTS = [
  new Product(new CProduct("a", 30)),
  new Product(new CProduct("b", 40)),
  new Product(new CProduct("c", 50))
]

export default class Products {
  static all(): Product[] {
    return PRODUCTS
  }
  static search_by_name(name: string): Product | undefined {
    return PRODUCTS.find(p => p.props.name === name)
  }
}