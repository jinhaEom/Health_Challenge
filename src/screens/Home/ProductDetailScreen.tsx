import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRootNavigation, useRootRoute } from "../../navigation/Navigation";
import { ProductList } from "../../data/ProductList";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProductDetailScreen = () => {
    const { id } = useRootRoute<"ProductDetailScreen">().params;
    const product = ProductList.find((product) => product.id === parseInt(id));
    const navigation = useRootNavigation();
    return (
        <View className="flex-1">
            <View className="flex-row items-center p-[16px]">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Image
                source={{ uri: product?.images[0] }}
                className="w-full h-48"
                resizeMode="contain"
            />
            <Text>{product?.name}</Text>
            <Text>{product?.description}</Text>
            <Text>{product?.price}</Text>
            <Text>{product?.images[0]}</Text>
        </View>
    );
};

export default ProductDetailScreen;