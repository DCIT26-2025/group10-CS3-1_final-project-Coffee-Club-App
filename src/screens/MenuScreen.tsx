import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuScreenProps } from '../navigation/NavigationType';





const categories = [
    { name: "Iced Coffee" },
    { name: "Non-Coffee" },
    { name: "Lemonade" },
    { name: "MilkTea" },
]

const flavors = [
    { name: "Americano" },
    { name: "Spanish Latte" },
    { name: "Matcha" },
    { name: "Caramel macchiato" },
    { name: "Mocha" },
    { name: "Vanilla Latte" },
    { name: "Hazelnut" },
];

const MenuScreen = ({ navigation }: MenuScreenProps) => {
  return (
    <View>
      <View style={styles.header}>
        <View>
            <Text style={styles.header_logo}>TCC Logo</Text>
        </View>
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
                    onPress={() => navigation.navigate("Product")}
                >
                    <View style={styles.product_image_container}>
                        <Image source={require("../assets/images/tempImages/temp_coffee_img.png")} 
                        style={styles.product_image}/>
                    </View>
                    
                    <View style={styles.product_text_container}>
                        <Text style={{ color: "white" }}>{item.name}</Text>
                    </View>
                    
                </TouchableOpacity>
            )
        }}

        ListHeaderComponentStyle={{ marginVertical: 10 }}
        ListHeaderComponent={() => (
            <View> 
                <Text style={{ fontWeight: "600", fontSize: 20, textAlign: "center" }}>Categories</Text>
                <FlatList 
                    horizontal={true}
                    style={{ paddingVertical: 5 }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap:10, paddingHorizontal: 12}}
                    data={categories}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.categories_card}>
                            <Text style={{ color: "white" }}>{item.name}</Text>
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
                    <Text style={{ fontWeight: "600" }}>Flavors</Text>
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
        display: "flex",
        backgroundColor: "brown",
        alignItems: "center",
        height: 50,
        width: 50,
        marginLeft: 10,
        marginTop: 10,
    },
    categories_card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: 160,
        height: 200,
        backgroundColor: "#047579FF",
        borderRadius: 40,
    },
    product_card: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#796704FF",
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
        backgroundColor: "lightgreen",
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