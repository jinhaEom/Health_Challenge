import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ProductList } from "../../data/ProductList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, useRootNavigation } from "../../navigation/Navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
    const [searchFocus, setSearchFocus] = useState(false);
    const navigation = useRootNavigation();
    return (
        <View className="flex-1">
            <View className="flex-row  items-center">
                <TextInput
                    placeholder="Search"
                    className="border-[1px] border-blue-800 p-[8px] m-[8px] flex-1 rounded-[12px] h-[36px]"
                    onFocus={() => setSearchFocus(true)}
                    onBlur={() => setSearchFocus(false)}
                >
                </TextInput>
                <TouchableOpacity className="mx-[8px]" onPress={() => { }}>
                    <Ionicons name="bag" size={24} color="black" />
                </TouchableOpacity>
                {searchFocus && (
                    <TouchableOpacity className="mx-[4px]" onPress={() => { }}>
                        <Ionicons name="search" size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>

            <FlatList
                className="flex-1"
                data={ProductList}
                renderItem={({ item }) => (
                    <TouchableOpacity className="m-2 p-4 border border-gray-200 rounded-lg bg-white" onPress={() => navigation.navigate('ProductDetailScreen', { id: item.id.toString() })}>
                        <Image
                            source={{ uri: item.images[0] }}
                            className="w-full h-48"
                            resizeMode="contain"
                        />
                        <Text className="text-base font-medium text-gray-800">
                            {item.name}
                        </Text>
                        <Text className="text-[24px] text-gray-600 mt-1">
                            ₩{item.price.toLocaleString()}
                        </Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <View className="flex-1 justify-center items-center">
                        <Text className="text-gray-600">No products found</Text>
                    </View>
                }
                keyExtractor={(item) => item.id.toString()}
                numColumns={1}

            />

        </View >
    );
};

export default HomeScreen;

