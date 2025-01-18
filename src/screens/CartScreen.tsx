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
import React, { useState } from 'react'
import { RootStackParamList } from '../navigation/NavigationType'
import DateTimePicker from '@react-native-community/datetimepicker';

const { width, height } = Dimensions.get('window');

const ProductQuantityComponent = () => {

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



  const totalPrice = 50 * quantity;
  return (
    <View style={styles.product_quantity_container}>
      <View>
        <Image 
        source={require("../assets/images/Flavors/Milktea/matcha_tea.png")}
        style={{
          height: 80,
          width: 80,
          resizeMode: "contain"
        }} 
        />
      </View>
      <View style={{justifyContent: "space-between", backgroundColor: "brown", height: "90%"}}>
        <Text>Product Name</Text>
        <Text>Product Price</Text>
      </View>

      <View style={{alignItems: "center"}}>
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
        <Text style={{fontWeight: "bold"}}>P{totalPrice.toFixed(2)}</Text>
      </View>
      
    </View>
  )
}

const CartScreen = () => {
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("Delivery");

  const handleOptionPress = (option: string) => {
    setSelectedDeliveryOption(option);
  }

  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const timeFormat = { hour: "2-digit", minute: "2-digit"};
  const [location, setLocation] = useState("");

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }: { type: string }, selectedDate: any) => {
    if (type = "set") {
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
  }

  const showMode = (modeToShow : any) => {
    toggleDatepicker();
    setMode(modeToShow);
  } 
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.details_container}>
        <View style={styles.details_header}>
          <Text style={{fontWeight: "bold", fontSize: 28}}>review your order</Text>
        </View>

        <ProductQuantityComponent />
        
        <ProductQuantityComponent />

      </View>

      <View style={[styles.details_container, {marginBottom: 20}]}>
        <View style={styles.details_header}>
          <Text style={{fontWeight: "bold", fontSize: 30}}>delivery options</Text>
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
    </ScrollView>
  )
}

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
    backgroundColor: "yellow"

  },

  quantity_counter: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    height: "90%"
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

})

export default CartScreen