import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuScreenProps } from '../navigation/NavigationType';


const categories = [
    { name: "All Flavors"},
    { name: "Iced Coffee" },
    { name: "Lemonade" },
    { name: "MilkTea" },
]

const icedcoffee_flavors = [
    { name: "Americano", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 2, image: require("../assets/images/Flavors/Iced Coffee/americano.png") },
    { name: "Spanish Latte", price: 60.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 3, image: require("../assets/images/Flavors/Iced Coffee/spanish_latte.png") },
    { name: "Matcha", price: 70.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 1, image: require("../assets/images/Flavors/Iced Coffee/matcha.png") },
    { name: "Caramel macchiato", price: 80.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 2, image: require("../assets/images/Flavors/Iced Coffee/caramel_macchiato.png") },
    { name: "Mocha", price: 85.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 3, image: require("../assets/images/Flavors/Iced Coffee/mocha.png") },
    { name: "Vanilla Latte", price: 75.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 1, image: require("../assets/images/Flavors/Iced Coffee/vanilla_latte.png") },
    { name: "Hazelnut", price: 100.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 2, image: require("../assets/images/Flavors/Iced Coffee/hazelnut.png") },
];


const milktea_flavors = [
    { name: "Thai", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 1, image: require("../assets/images/Flavors/Milktea/thai.png") },
    { name: "Tiramisu", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 2, image: require("../assets/images/Flavors/Milktea/tiramisu.png") },
    { name: "Matcha Tea", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 3, image: require("../assets/images/Flavors/Milktea/matcha_tea.png") },
    { name: "Taro", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 1, image: require("../assets/images/Flavors/Milktea/taro.png") },
    { name: "Crème brûlée", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 2, image: require("../assets/images/Flavors/Milktea/Crème brûlée.png") },
];


const lemonade_flavors = [
    { name: "Blueberry", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 3, image: require("../assets/images/Flavors/Lemonade/Blueberry.png") },
    { name: "Mango", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 1, image: require("../assets/images/Flavors/Lemonade/mango.png") },
    { name: "Lime", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 2, image: require("../assets/images/Flavors/Lemonade/lime.png") },
    { name: "Strawberry", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 3, image: require("../assets/images/Flavors/Lemonade/strawberry.png") },
    { name: "Blue Caracao", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 1, image: require("../assets/images/Flavors/Lemonade/blue caracao.png") },
    { name: "Four Seasons", price: 50.00, ingredients: "milk, coffee, condensed milk", caffeine_level: 2, image: require("../assets/images/Flavors/Lemonade/four_seasons.png") },
];

const flavors = [
    ...icedcoffee_flavors,
    ...milktea_flavors,
    ...lemonade_flavors
];

const MenuScreen = ({ navigation }: MenuScreenProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Flavors");
  
  const filteredFlavors = selectedCategory === "All Flavors"
    ? flavors
    : selectedCategory === "Iced Coffee"
    ? icedcoffee_flavors
    : selectedCategory === "MilkTea"
    ? milktea_flavors
    : lemonade_flavors;


  return (
    <View>
      <View style={styles.header}>
        
        <Image source={require("../assets/images/Logos/TCC_Logo.png")} style={styles.header_logo}></Image>
                   
        <View style={styles.header_title}>
            <Text style={styles.header_title_text1}>the coffee</Text>
            <Text style={styles.header_title_text2}>club.</Text>
        </View>
        
      </View>

      <View style={styles.category_container}> 
        <Text style={{ fontWeight: "600", fontSize: 20, marginLeft: 40}}>Categories</Text>
        <FlatList 
            horizontal={true}
            style={{ paddingVertical: 5 }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap:10, paddingHorizontal: 12}}
            data={categories}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => (
                <TouchableOpacity 
                style={[styles.categories_card, 
                        selectedCategory === item.name && styles.selected_category_card
                    ]}
                    onPress={() => setSelectedCategory(item.name)}>
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
            
        </View>
      </View>
      
      <FlatList 
        data={filteredFlavors}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 17 }}
        contentContainerStyle={{ gap: 10, paddingBottom: 400, paddingTop: 20 }}
        keyExtractor={(item, index) => item.name + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity
                    style={styles.product_card}
                    onPress={() => navigation.navigate("Product", { 
                        name: item.name, 
                        price: item.price,
                        ingredients: item.ingredients,
                        caffeine_level: item.caffeine_level,
                        image: item.image
                    })}
                >
                    <View style={styles.product_image_container}>
                        <Image source={item.image} 
                        style={styles.product_image}/>
                    </View>

                    <View style={styles.product_text_container}>
                        <Text style={{ color: "brown", fontWeight: "bold", fontSize: 20}}>{item.name}</Text>
                    </View>
                    
                </TouchableOpacity>
            )
        }}
        
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

    category_container: {
        height: "22%",
        borderBottomWidth: 5,
        borderBottomColor: "brown", 
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },

    categories_card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: 160,
        height: 160,
        backgroundColor: "#D9D9D9",
        borderRadius: 40,
    },

    selected_category_card: {
        borderColor: "brown",
        borderWidth: 5,
    },

    product_list_container: {

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
        marginTop: 20,
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    }
})

export default MenuScreen