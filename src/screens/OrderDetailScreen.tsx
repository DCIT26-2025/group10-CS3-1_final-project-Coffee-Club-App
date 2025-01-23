import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';
import React from 'react';
import { useOrder } from '../utils/OrderContext';

const OrderDetailScreen = () => {
  const { orderProducts } = useOrder();

  const totalPrice = orderProducts.reduce((sum, product) => sum + product.quantityPrice, 0);

  const OrderProductComponent = ({ product }: { product: any }) => {
    return (
      <View style={op_styles.container}>
        <View style={op_styles.iconContainr}>
          <Image source={product.image} style={op_styles.icon_image} />
        </View>
        <View style={op_styles.product_name_container}>
          <Text>{product.name}</Text>
          <Text>P{product.price.toFixed(2)} each</Text>
        </View>
        <View style={op_styles.quantity_container}>
          <Text>Qty: {product.quantity}</Text>
          <Text style={{ fontWeight: 'bold' }}>P{product.quantityPrice.toFixed(2)}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.details_container}>
        <Text style={styles.detail_headers}>products</Text>
        <View style={styles.list_container}>
          <FlatList
            data={orderProducts}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => <OrderProductComponent product={item} />}
            contentContainerStyle={styles.flatlist_style}
          />
        </View>
        <Text style={styles.total_price}>Total P{totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

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
      height: "80%",
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
    justifyContent: "space-between",
    paddingVertical: 2,
  },

  quantity_container: {
    width: "30%",
    height: "100%",
    backgroundColor: "transparent",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingVertical: 2,
    paddingRight: 10
  }
})

export default OrderDetailScreen