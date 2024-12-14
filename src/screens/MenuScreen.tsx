import { View, Text, FlatList, TouchableOpacity } from 'react-native'
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
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#796704FF",
                        flex: 1,
                        height: 200,
                        borderRadius: 20,
                    }}
                    onPress={() => navigation.navigate("Product")}
                >
                    <Text style={{ color: "white" }}>{item.name}</Text>
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

export default MenuScreen