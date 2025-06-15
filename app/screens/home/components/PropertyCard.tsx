// PropertyCard.tsx
import ButtonComponent from "@/components/custom/ButtonComponent";
import { SCREEN_WIDTH } from "@/constants/constants";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  details: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  image,
  title,
  price,
  location,
  details,
}) => {
  const router = useRouter();
  const isNavigating = useRef(false);

  const handlePress = () => {
    if (isNavigating.current) return;

    isNavigating.current = true;

    router.push({
      pathname: "/screens/propertyScreen",
      params: { id, title },
    });

    setTimeout(() => {
      isNavigating.current = false;
    }, 1000);
  };
 
  
  return (
    <ButtonComponent
      child={
        <View style={styles.card}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.details}>{details}</Text>
          </View>
        </View>
      }
      style={{ width: SCREEN_WIDTH - 32, alignSelf: "center" }}
      bounce
      onPress={handlePress}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 150,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#444",
    marginTop: 4,
  },
  location: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  details: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
});

export default PropertyCard;
