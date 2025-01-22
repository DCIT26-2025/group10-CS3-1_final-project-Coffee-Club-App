import {
     View, 
     Text,
     StyleSheet 
} from 'react-native'
import React from 'react'

const orderProducts = [
    { id: 1, name: "Americano", price: 45.00, quantity: 2, quantityPrice: 90.00}
];

const OrderProductComponent = ({ product }: 
    { product: { id: number,  name: String, price: number, quantity: number, quantityPrice: number} }) => {
    return (
        <View>

        </View>
    )
}

const OrderDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.details_container}>
        <Text style={styles.detail_headers}>products</Text>
        
        <Text style={styles.detail_headers}>delivery details</Text>
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
        height: "80%",
        borderRadius: 40,
    },
    detail_headers: {
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: 40,
        paddingTop: 30
    }
})

export default OrderDetailScreen