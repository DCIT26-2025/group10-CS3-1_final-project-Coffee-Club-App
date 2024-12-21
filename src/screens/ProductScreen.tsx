import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.product_image_container}>
        <Text style={styles.product_image_text}>Product Image</Text>
      </View>

      <View style= {styles.product_details_container}>
        <Text style={styles.product_name}>Product Name</Text>
        <Text style={styles.product_price}>Product Price</Text>
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

  product_image_text: {
    fontSize: 20,
    fontWeight: "bold"
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