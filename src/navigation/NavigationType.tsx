import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    Menu: undefined;
    Product: undefined;
}

export type MenuScreenProps = NativeStackScreenProps<RootStackParamList, "Menu">

export type ProductScreenProps = NativeStackScreenProps<RootStackParamList, "Product">

