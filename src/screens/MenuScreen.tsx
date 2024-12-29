import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
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
      <FlatList 
        data={flavors}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 17 }}
        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
        keyExtractor={(item, index) => item.name + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity
                    style={styles.product_card}
                    onPress={() => navigation.navigate("Product")}
                >
                    <View style={styles.product_image_container}>
                        <Text>Product Image</Text>
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
                <Text style={{ fontWeight: "600" }}>Categories</Text>
                <FlatList 
                    horizontal={true}
                    style={{ paddingVertical: 5 }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap:10, paddingHorizontal: 12}}
                    data={categories}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                width: 300,
                                height: 240,
                                backgroundColor: "#047579FF",
                                borderRadius: 20,
                            }}
                        >
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
    product_card: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#796704FF",
        flex: 1,
        height: 200,
        borderRadius: 20,
    },

    product_image_container: {
        display: "flex",
        width: "100%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    product_text_container: {
        display: "flex",
        width: "100%",
        height: "30%",
        justifyContent:"center",
        alignItems: "center",
    }
})

export default MenuScreen