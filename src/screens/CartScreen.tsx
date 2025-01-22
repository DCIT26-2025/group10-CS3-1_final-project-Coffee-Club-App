import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Dimensions, 
  TouchableOpacity, 
  Pressable,
  TextInput, 
  Image,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { RootStackParamList } from '../navigation/NavigationType'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useCart } from '../utils/CartContext';
import { AntDesign } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window');

const CartProductComponent = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { cart, setCart, removeFromCart } = useCart();

  const incrementQuantity = () => {
    if (quantity < 10) {
      const newQuantity = quantity + 1;
      setQuantity(quantity + 1);
      updateCartQuantity(product.name, newQuantity);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(quantity - 1);
      updateCartQuantity(product.name, newQuantity);
    }
  };

  const updateCartQuantity = (productName: string, newQuantity: number) => {
    const updatedCart = cart.map((item : any) => {
      if (item.name === productName) {
        return { ...item, quantity: newQuantity, totalPrice: item.price * newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const totalPrice = product.price * quantity;

  return (
    <View style={styles.product_quantity_container}>
      <TouchableOpacity onPress={() => removeFromCart(product.name)}>
        <AntDesign name="delete" size={20} color="black" style={{ marginRight: 0}} />        
      </TouchableOpacity>
      <View>
        <Image 
          source={product.image}
          style={{
            height: 80,
            width: 80,
            resizeMode: "contain"
          }} 
        />
      </View>
      <View style={{ justifyContent: "space-between", height: "90%", width: "30%" }}>
        <Text>{product.name}</Text>
        <Text>P{product.price.toFixed(2)}</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={styles.quantity_counter}>
          <TouchableOpacity onPress={decrementQuantity}>
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>-</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.quantity_text_field}
            value={String(quantity)}
            editable={false}
          />

          <TouchableOpacity onPress={incrementQuantity}>
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "bold" }}>P{totalPrice.toFixed(2)}</Text>
      </View>

      
    </View>
  );
};

const CartScreen = () => {
  const { cart } = useCart();
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("Delivery");

  const handleOptionPress = (option: string) => {
    setSelectedDeliveryOption(option);
  };

  const [totalOrderPrice, setTotalOrderPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalOrderPrice(total);
  }, [cart]);

  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const timeFormat = { hour: "2-digit", minute: "2-digit" };
  const [location, setLocation] = useState("");

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }: { type: string }, selectedDate: any) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      toggleDatepicker();

      if (mode === "date") {
        setDeliveryDate(currentDate.toDateString());
      } else {
        setDeliveryTime(currentDate.toLocaleTimeString([], timeFormat));
      }
    } else {
      toggleDatepicker();
    }
  };

  const showMode = (modeToShow: any) => {
    toggleDatepicker();
    setMode(modeToShow);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.empty_cart_container}>
          <Text style={styles.empty_cart_text}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <View style={styles.details_container}>
            <View style={styles.details_header}>
              <Text style={{ fontWeight: "bold", fontSize: 28 }}>review your order</Text>
            </View>

            {cart.map((product, index) => (
              <CartProductComponent key={index} product={product} />
            ))}
          </View>

          <View style={[styles.details_container, { marginBottom: 20 }]}>
            <View style={styles.details_header}>
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>delivery options</Text>
            </View>

            <View style={styles.delivery_option_button_container}>
              <TouchableOpacity
                style={[
                  styles.delivery_option_button,
                  selectedDeliveryOption === 'Delivery' && styles.selected_delivery_option_button
                ]}
                onPress={() => handleOptionPress('Delivery')}
              >
                <Text style={styles._delivery_option_buttonText}>Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.delivery_option_button,
                  selectedDeliveryOption === 'Pickup' && styles.selected_delivery_option_button
                ]}
                onPress={() => handleOptionPress('Pickup')}
              >
                <Text style={styles._delivery_option_buttonText}>Pickup</Text>
              </TouchableOpacity>
            </View>

            {showPicker && (
              <DateTimePicker 
                display="spinner"
                value={date}
                mode={mode}
                onChange={onChange}
                minimumDate={new Date()}
                maximumDate={new Date("2030-12-31")}
              />
            )}
            <View style={styles.delivery_details_container}>
              <Text>Date of Delivery</Text>
              <Pressable onPress={() => showMode("date")}>
                <TextInput 
                  style={styles.delivery_date_input}
                  placeholder={new Date().toDateString()}
                  value={deliveryDate}
                  onChangeText={setDeliveryDate}
                  placeholderTextColor={"black"}
                  editable={false}
                />
              </Pressable>
              <Text>Time of Delivery</Text>
              <Pressable onPress={() => showMode("time")}>
                <TextInput 
                  style={styles.delivery_date_input}
                  placeholder={"Choose Time"}
                  value={deliveryTime}
                  onChangeText={setDeliveryTime}
                  placeholderTextColor={"black"}
                  editable={false}
                />
              </Pressable>
              {selectedDeliveryOption === "Delivery" && (
                <>
                  <Text>Location</Text>
                  <TextInput 
                    style={styles.location_input}
                    placeholder={"Enter your location"}
                    value={location}
                    onChangeText={setLocation}
                    placeholderTextColor={"black"}           
                  />
                </>
              )}
            </View>
          </View>
        </>
      )}
      <View style={styles.add_to_cart_container}>
        <TouchableOpacity activeOpacity= {0.5} style={styles.add_to_cart_btn}>
        <Text style={{fontSize: 15, color: "white"}}>PLACE ORDER</Text>
        </TouchableOpacity>

        <View style={styles.cart_price_container}>
          <Text style={styles.cart_price}>P{totalOrderPrice.toFixed(2)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 200,
    alignItems: "center",
  },

  details_header: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
  },

  details_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 10
  },

  product_quantity_container: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    width: "90%",
    height: 100,
    marginTop: 10,
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,

  },

  quantity_counter: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    marginLeft: -20
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

  delivery_option_button_container: {
    marginTop: 10,
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 40,
    width: "90%",
    overflow: "hidden"
  },

  delivery_option_button: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    width: "50%",
    height: "100%",
  },
  selected_delivery_option_button: {
    backgroundColor: "#BA9456",
  },
  _delivery_option_buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

  delivery_details_container: {
    marginTop: 10,
    borderWidth: 5,
    borderColor: "#432818",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center"
  },

  delivery_date_input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "50%",
  },

  location_input: {
    width: "90%",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: "left"
  },

  empty_cart_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1
  },

  empty_cart_text: {
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default CartScreen;