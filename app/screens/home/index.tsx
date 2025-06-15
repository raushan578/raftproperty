import React, { useMemo } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Button,
  Image,
} from "react-native";
import { useAtom } from "jotai";
import { searchAtom } from "@/lib/atoms";
import { useProperties } from "@/providers/useProperties";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard";
import { propertiesAtom, Property } from "@/lib/propertiesAtom";
import { filterProperties } from "./filterProperties";
import { useRouter } from "expo-router";
import { SCREEN_WIDTH } from "@/constants/constants";

const HomeScreen = () => {
  // ✅ Hooks should be at the top
  // const { data, isLoading, error } = useProperties();
  const [properties] = useAtom(propertiesAtom);
  const [searchQuery] = useAtom(searchAtom);

  const filteredProperties: Property[] = useMemo(() => {
    return filterProperties(properties, searchQuery);
  }, [properties, searchQuery]);

  // if (isLoading) return <ActivityIndicator />;
  // if (error) return <Text>Error loading properties</Text>;

  return (
    <View style={{ flex: 1 }}>
      <View style={{width:SCREEN_WIDTH - 32, flexDirection:
      "row",justifyContent:"flex-start",marginTop:40,
      alignSelf:"center"
      }}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={{fontWeight:"700",fontSize:20,marginTop:13}}>RAFT PROPERTY</Text>
      </View>

      <SearchBar
        onChangeText={(text) => console.log("Search:", text)}
        placeholder="Search properties..."
      />

      <FlatList
        data={filteredProperties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PropertyCard {...item} />}
        contentContainerStyle={{ paddingVertical: 14 }}
        ListEmptyComponent={
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              paddingTop: 100,
            }}
          >
            <FontAwesome name="search" size={48} color="#ccc" />
            <Text style={{ fontSize: 18, color: "#999", marginTop: 12 }}>
              No results found
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    objectFit: "contain",
   
  },
});
