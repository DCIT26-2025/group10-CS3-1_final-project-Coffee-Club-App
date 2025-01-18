import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      {/* Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.title}>spanish latte.</Text>
      </View>

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}></View>
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>spanish latte.</Text>
        <Text style={styles.ingredients}>milk, coffee, condensed milk.</Text>
        <Text style={styles.pricePerUnit}>P65.00 each.</Text>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.quantityInput}
            value={String(quantity)}
            editable={false}
          />
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Total Price and Add to Cart Button */}
      <View style={styles.footerContainer}>
        <Text style={styles.totalPrice}>P{(65 * quantity).toFixed(2)}</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4B08B", // Background color similar to the design
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    paddingTop: hp("3%"),
  },
  backButton: {
    marginRight: wp("3%"),
  },
  backText: {
    fontSize: hp("3%"),
    color: "#000",
  },
  title: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    color: "#000",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: hp("2%"),
  },
  imagePlaceholder: {
    width: wp("50%"),
    height: hp("25%"),
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  detailsContainer: {
    backgroundColor: "#F4E3D7",
    marginHorizontal: wp("5%"),
    padding: wp("5%"),
    borderRadius: 10,
  },
  productName: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    color: "#000",
  },
  ingredients: {
    fontSize: hp("2%"),
    color: "#6D6D6D",
    marginVertical: hp("1%"),
  },
  pricePerUnit: {
    fontSize: hp("2%"),
    color: "#000",
    marginBottom: hp("2%"),
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("40%"),
  },
  quantityButton: {
    backgroundColor: "#D4B08B",
    padding: hp("1%"),
    borderRadius: 5,
  },
  quantityText: {
    fontSize: hp("2.5%"),
    color: "#000",
  },
  quantityInput: {
    width: wp("10%"),
    textAlign: "center",
    fontSize: hp("2.5%"),
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp("5%"),
    marginTop: hp("2%"),
  },
  totalPrice: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    color: "#000",
  },
  addToCartButton: {
    backgroundColor: "#5C4026",
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("5%"),
    borderRadius: 50,
  },
  addToCartText: {
    fontSize: hp("2%"),
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ProductScreen;
