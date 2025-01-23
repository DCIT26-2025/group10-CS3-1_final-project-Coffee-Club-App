import {
     View, 
     Text,
     StyleSheet,
     FlatList,
     Image
} from 'react-native'
import React from 'react'
import { RootStackParamList } from '../navigation/NavigationType';

const orderProducts = [
    { id: 1, name: "Americano", price: 45.00, quantity: 2, quantityPrice: 90.00},
    { id: 2, name: "Caramel Macchiato", price: 50.00, quantity: 3, quantityPrice: 150.00},
    { id: 3, name: "Caramel Macchiato", price: 50.00, quantity: 3, quantityPrice: 150.00},
];

const totalPrice = orderProducts.reduce((sum, product) => sum + product.quantityPrice, 0);

const OrderProductComponent = ({ product }: 
    { product: { id: number,  name: String, price: number, quantity: number, quantityPrice: number} }) => {
    return (
        <View style={op_styles.container}>
          <View style={op_styles.iconContainr}>
            <Image source={require("../assets/images/Flavors/Iced Coffee/americano.png")} style={op_styles.icon_image}/>
          </View>
          <View style={op_styles.product_name_container}>
            <Text>{product.name}</Text>
            <Text>P{product.price.toFixed(2)} each</Text>
          </View>

          <View style={op_styles.quantity_container}>
            <Text>Qty: {product.quantity}</Text>
            <Text>P{product.quantityPrice.toFixed(2)}</Text>
          </View>
        </View>
    )
}

const OrderDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.details_container}>
        <Text style={styles.detail_headers}>products</Text>
        <View style={styles.list_container}>
          <FlatList 
            data={orderProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <OrderProductComponent product={item}/>}
            contentContainerStyle={styles.flatlist_style}
          />
        </View>
        
        <Text style={styles.total_price}>Total P{totalPrice.toFixed(2)}</Text>

        <Text style={styles.detail_headers}>delivery details</Text>
        <View>
          <View style={styles.detail_container}>
            <Text style={styles.detail_variable}>Type</Text>
            <Text>Delivery</Text>
          </View>
          
          <View style={styles.detail_container}>
            <Text style={styles.detail_variable}>Date</Text>
            <Text>January 12, 2024</Text>
          </View>

          <View style={styles.detail_container}>
            <Text style={styles.detail_variable}>Time</Text>
            <Text>2:00pm</Text>
          </View>

          <View style={styles.detail_container}>
            <Text style={styles.detail_variable}>Address</Text>
            <Text>Mendez, Cavite</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#BB9457"
    },
    details_container: {
        backgroundColor: "#EDEAE9",
        width: "80%",
        borderRadius: 40,
    },
    detail_headers: {
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: 30,
        paddingTop: 20
    },

    flatlist_style: {
      flexGrow: 1,
      alignItems: "center",
    },

    list_container: {
      width: "100%",
      height: "40%",
      borderBottomWidth: 2,
    },

    total_price: {
      fontSize: 15, 
      fontWeight: "bold", 
      alignSelf: "flex-end",
      paddingRight: 20,
      paddingTop: 10
    },

    detail_container: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 10,
      paddingHorizontal: 40
    },

    detail_variable: {
      fontWeight: "bold",
    },
    
})

const op_styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
    height: 80,
    flexDirection: "row",
    borderWidth: 2,
    marginVertical: 5

  },

  iconContainr: {
    width: "30%",
    height: "90%",
    backgroundColor: "transparent"
  },

  icon_image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },

  product_name_container: {
    width: "30%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "space-between"
  },

  quantity_container: {
    width: "30%",
    height: "100%",
    backgroundColor: "transparent",
    alignItems: "flex-end",
    justifyContent: "space-between"
  }
})

export default OrderDetailScreen