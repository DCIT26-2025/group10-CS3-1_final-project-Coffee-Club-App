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
        <Text>350 mL</Text>
      </View>

      <View style= {styles.product_details_container}>
        <Text style={styles.product_name}>{name}</Text>
        <View style={styles.product_caffeine_level_container}></View>
        <Text style={styles.product_ingredients}>milk, coffee, condensed milk </Text>
        <Text style={styles.product_price}>P{price.toFixed(2)} each</Text>
      </View>

      <View style={styles.add_to_cart_container}>
        <TouchableOpacity activeOpacity= {0.5} style={styles.add_to_cart_btn}>
        <Text style={{fontSize: 20, color: "white"}}>Add to cart</Text>
        </TouchableOpacity>

        <View style={styles.cart_price_container}>
          <Text style={styles.cart_price}>P65.00</Text>
        </View>
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BA9456",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  },
  product_image_container: {
    position: "absolute",
    top: 40,
    right: 80,
    width: "20%",
    height: "30%",
    backgroundColor: "lightblue",
    borderRadius: 20,    
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },

  product_details_container: {
    position: "relative",
    display: "flex",
    marginTop: 20,
    width: "80%",
    height: "40%",
    backgroundColor: "#ECEBE9",
    borderRadius: 20,
    padding: 30
  },

  product_name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#432818"
  },

  product_caffeine_level_container: {
    backgroundColor: "brown",
    width: 70,
    height: 20,
    marginVertical: 20
  },

  product_ingredients: {
    fontSize: 15
  },

  product_price: {
    fontSize: 20,
    marginTop: 100
  },
  product_image: {
    width: 120,
    height: 120,
  },

  add_to_cart_container: {
    marginRight: 30,
    marginTop: 20,
    display: "flex",
    width: "60%",
    height: 120,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    position: "relative",
    alignSelf: "flex-end"
  },

  cart_price_container: {
    backgroundColor: "#DDC9AC",
    height: "50%",
    width: "80%",
    borderRadius: 50,
    justifyContent: "center",
    paddingLeft: 30
  },
  cart_price: {
    fontSize: 25,
    fontWeight: "bold"
  },

  add_to_cart_btn: {
    top: 60,
    width: 140,
    height: "100%",
    backgroundColor: "#432818",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    zIndex: 1
  },

})

export default ProductScreen