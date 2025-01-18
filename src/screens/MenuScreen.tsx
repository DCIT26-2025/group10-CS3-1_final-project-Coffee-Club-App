import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuScreenProps } from '../navigation/NavigationType';


const categories = [
    { name: "Iced Coffee" },
    { name: "Lemonade" },
    { name: "MilkTea" },
]

const icedcoffee_flavors = [
    { name: "Americano", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Spanish Latte", price: 60.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Matcha", price: 70.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Caramel macchiato", price: 80.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Mocha", price: 85.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Vanilla Latte", price: 75.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Hazelnut", price: 100.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
];

const milktea_flavors = [
    { name: "Thai", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Tiramisu", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Matcha", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Taro", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Creme brulee", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
];

const lemonade_flavors = [
    { name: "Blueberr", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Mango", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Lime", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Strawberry", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Blue Caracao", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Four Seasons", price: 50.00, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
];

const flavors = [
    ...icedcoffee_flavors,
    ...milktea_flavors,
    ...lemonade_flavors
];

const MenuScreen = ({ navigation }: MenuScreenProps) => {
  return (
    <View>
      <View style={styles.header}>
        
        <Image source={require("../assets/images/Logos/TCC_Logo.png")} style={styles.header_logo}></Image>
            
        
        <View style={styles.header_title}>
            <Text style={styles.header_title_text1}>the coffee</Text>
            <Text style={styles.header_title_text2}>club.</Text>
        </View>
        
      </View>
      
      <FlatList 
        data={flavors}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 17 }}
        contentContainerStyle={{ gap: 10, paddingBottom: 80 }}
        keyExtractor={(item, index) => item.name + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity
                    style={styles.product_card}
                    onPress={() => navigation.navigate("Product", { 
                        name: item.name, 
                        price: item.price,
                        image: item.image
                    })}
                >
                    <View style={styles.product_image_container}>
                        <Image source={require("../assets/images/Flavors/Iced Coffee/americano.png")} 
                        style={styles.product_image}/>
                    </View>

                    <View style={styles.product_text_container}>
                        <Text style={{ color: "brown", fontWeight: "bold", fontSize: 20}}>{item.name}</Text>
                    </View>
                    
                </TouchableOpacity>
            )
        }}

        ListHeaderComponentStyle={{ marginVertical: 10 }}
        ListHeaderComponent={() => (
            <View> 
                <Text style={{ fontWeight: "600", fontSize: 20, marginLeft: 40}}>Categories</Text>
                <FlatList 
                    horizontal={true}
                    style={{ paddingVertical: 5 }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap:10, paddingHorizontal: 12}}
                    data={categories}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.categories_card}>
                            <Text style={{ color: "brown", fontWeight: "bold", fontSize: 20}}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                <View
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        paddingHorizontal: 12,
                        marginTop: 15,
                    }}
                >
                    <Text style={{ fontWeight: "600" , fontSize: 20, marginLeft: 40}}>Flavors</Text>
                </View>
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header_title: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: 10,
        marginTop: 10
    },
    header_title_text1: {
        color: "brown",
        fontSize: 20,
        fontWeight: "bold"
    },
    header_title_text2: {
        color: "brown",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 40
    },
    header_logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginLeft: 15,
        marginTop: 10
    },

    categories_card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: 160,
        height: 200,
        backgroundColor: "#D9D9D9",
        borderRadius: 40,
    },
    product_card: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#D9D9D9",
        flex: 1,
        height: 200,
        borderRadius: 40,
    },

    product_image_container: {
        display: "flex",
        width: "100%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "D9D9D9",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    product_text_container: {
        display: "flex",
        width: "100%",
        height: "30%",
        justifyContent:"center",
        alignItems: "center",
    },

    product_image: {
        width: 120,
        height: 120
    }
})

export default MenuScreen