import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useRoute, RouteProp} from '@react-navigation/native'
import { RootStackParamList } from '../navigation/NavigationType'


const { width, height } = Dimensions.get('window');

type ProductScreenRouteProp = RouteProp<RootStackParamList, "Product">;

const ProductScreen = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const { name, price, image } = route.params;

  const [quantity,setQuantity] = useState(1);
  
  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const totalPrice = price * quantity;

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        
        <View style= {styles.product_details_container}>
          <View style={styles.product_image_container}>
            <Image source={image} style={styles.product_image} />
            <Text style={styles.imageLabel}>350 mL</Text>
          </View>
          
          <View>
            <Text style={styles.product_name}>{name}</Text>
            <View style={styles.product_caffeine_level_container}></View>
            <Text style={styles.product_ingredients}>milk, coffee, condensed milk </Text>
          </View>
          

          <View style={styles.add_quantity_container}>
            <Text style={styles.product_price}>P{price.toFixed(2)} each</Text>

            <View style={styles.quantity_counter}>
              <TouchableOpacity onPress={decrementQuantity}>
                <Text style={{fontSize: 50, fontWeight: "bold"}}>-</Text>
              </TouchableOpacity>


            <TextInput
              style={styles.quantity_text_field}
              value={String(quantity)}
              editable={false}
            />


              <TouchableOpacity onPress={incrementQuantity}>
                <Text style={{fontSize: 50, fontWeight: "bold"}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>

        <View style={styles.add_to_cart_container}>
          <TouchableOpacity activeOpacity= {0.5} style={styles.add_to_cart_btn}>
          <Image source={require("../assets/images/Add_to_cart.png")} style={styles.add_to_cart_btn_icon}/>
          <Text style={{fontSize: 15, color: "white"}}>Add to cart</Text>
          </TouchableOpacity>

          <View style={styles.cart_price_container}>
            <Text style={styles.cart_price}>P{totalPrice.toFixed(2)}</Text>
          </View>
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

  contentWrapper: {
    width: '90%',
    height: '80%',
    position: 'relative',
    alignItems: 'center',
  },
  product_image_container: {
    position: "absolute",
    top: (-height * 0.1) + 30,
    right: -10,
    width: "40%",
    height: 80,
    backgroundColor: "transparent",    
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },

  product_image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },

  imageLabel: {
    marginTop: 5,
    fontSize: 14,
    color: '#432818',
    textAlign: "center"
  },

  product_details_container: {
    position: "relative",
    marginTop: height * 0.1,
    width: "100%",
    height: "50%",
    backgroundColor: "#ECEBE9",
    borderRadius: 20,
    padding: 30,
    justifyContent: "space-between"
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
    marginRight: 10,
  },
  

  add_quantity_container: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    width: "100%",
    marginTop: 50

  },

  quantity_counter: {
    flexDirection: "row", 
    alignItems: "center",
  },

  quantity_text_field: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    width: 60,
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10
  },
  
  add_to_cart_container: {
    marginTop: 20,
    display: "flex",
    width: 270,
    height: 120,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignSelf: "flex-end"
  },

  cart_price_container: {
    backgroundColor: "#DDC9AC",
    height: "60%",
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
    top: 75,
    width: 140,
    height: "100%",
    backgroundColor: "#432818",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    zIndex: 1
  },

  add_to_cart_btn_icon: {
    width: "50%",
    height: "50%",
    resizeMode: "contain"
  }
  
})

export default ProductScreen