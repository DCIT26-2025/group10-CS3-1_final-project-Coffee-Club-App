import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRoute, RouteProp} from '@react-navigation/native'
import { RootStackParamList } from '../navigation/NavigationType'

type ProductScreenRouteProp = RouteProp<RootStackParamList, "Product">;

const ProductScreen = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const { name, price, image } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.product_image_container}>
        <Image source={image} style={styles.product_image} />
      </View>

      <View style= {styles.product_details_container}>
        <Text style={styles.product_name}>{name}</Text>
        <Text style={styles.product_price}>P{price.toFixed(2)}</Text>
      </View>
      
      <TouchableOpacity activeOpacity= {0.5} style={styles.add_to_cart_btn}>
        <Text style={styles.text}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

  },
  product_image_container: {
    marginTop: 20,
    width: "80%",
    height: 200,
    backgroundColor: "lightblue",
    borderRadius: 20,    
    justifyContent: "center",
    alignItems: "center",

  },

  product_details_container: {
    marginTop: 20,
    width: "80%",
    height: "30%",
    backgroundColor: "lightgreen",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  product_name: {
    fontSize: 20
  },

  product_price: {
    fontSize: 20,
  },
  product_image: {
    width: 120,
    height: 120,
  },

  add_to_cart_btn: {
    marginTop: 20,
    width: "50%",
    height: 100,
    backgroundColor: "orange",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 20
  }
})

export default ProductScreen