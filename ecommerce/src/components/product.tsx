import { Component } from "react"
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native'

export class CProduct {
  constructor(
    readonly name = "",
    readonly price = 0,
    readonly image = "assets/icons/404.png",
    readonly description = "",
    public onPress = () => {}
  ) {}
}

export default class Product extends Component<CProduct> {
  render() {
    return (
      <TouchableOpacity style={S.card} onPress={this.props.onPress}>
        <Image style={S.thumb} source={{ uri: this.props.image }}/>
        <View style={S.infoContainer}>
          <Text style={S.name}>{this.props.name}</Text>
          <Text style={S.price}>$ {this.props.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }
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
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
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
})