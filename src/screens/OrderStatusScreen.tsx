import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet,
  TouchableOpacity,
  Image 
} from 'react-native'
import React from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/NavigationType';
import OrderDetailScreen from './OrderDetailScreen';
import { AppHeader } from '../navigation/_layout';

const sample_icon = require("../assets/images/Notification Icons/delilvery_alert.png");

const orders = [
  { id: 1, status: "Pending" },
  { id: 2, status: "Delivered" },
  { id: 3, status: "Cancelled" },
  { id: 4, status: "Cancelled" },
  { id: 5, status: "Cancelled" },
  { id: 6, status: "Cancelled" },
  { id: 7, status: "Cancelled" },
  // Add more orders as needed
];

// Sort orders in descending order based on order_id
const sortedOrders = orders.sort((a, b) => b.id - a.id);
const OrderTile = ({ order }: { order: { id: number, status: string } }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("OrderDetail")}>
      <View style={ot_styles.order_tile}>
        <View style={ot_styles.icon_container}>
          <Image source={sample_icon} style={ot_styles.icon_image}/>
        </View>

        <View style={ot_styles.status_container}>
          <Text style={ot_styles.order_id_text}>Order #{order.id}</Text>
          <Text style={ot_styles.order_status}>Order Status: {order.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const OrderStatusScreen = () => {
  return (
    <View>
      <AppHeader />

      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.screen_title}>Your orders</Text>
        </View>
        <FlatList
          data={sortedOrders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OrderTile order={item} />}
          contentContainerStyle={styles.scroll_container}
        />
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  title_container: {
    justifyContent: "flex-end",
    height: 80,
    width: "100%"
  },
  screen_title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  scroll_container: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: "90%"
  },
});

const ot_styles = StyleSheet.create({
  order_tile: {
    width: "85%",
    height: 100,
    backgroundColor: "transparent",
    flexDirection: "row",
    borderWidth: 2,
    marginVertical: 10,
  },
  icon_container: {
    width: "30%",
    height: "100%",
    backgroundColor: "transparent"
  },
  icon_image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  status_container: {
    width: "70%",
    height: "100%",
    backgroundColor: "transparent",
    paddingLeft: 20,
    paddingTop: 20
  },
  order_id_text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  order_status: {
    fontSize: 15
  }
})

export default OrderStatusScreen