import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    Menu: undefined;
    Product: { name: string, price: number, ingredients: string, caffeine_level: number, image: any};
    OrderStatus: undefined;
    OrderDetail: undefined;
}

export type MenuScreenProps = NativeStackScreenProps<RootStackParamList, "Menu">

export type ProductScreenProps = NativeStackScreenProps<RootStackParamList, "Product">

export type OrderStatusScreenProps = NativeStackScreenProps<RootStackParamList, "OrderStatus">
export type OrderDetailScreenProps = NativeStackScreenProps<RootStackParamList, "OrderDetail">



