import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

interface Props {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  onDelete: (id: string) => void;
}

const BookingCard: React.FC<Props> = ({ id, title, price, location, image, onDelete }) => {
  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteBox} onPress={() => onDelete(id)}>
      <FontAwesome name="trash" size={24} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
        <FontAwesome name="check-circle" size={24} color="green" style={styles.icon} />
      </View>
    </Swipeable>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    color: "#333",
  },
  location: {
    fontSize: 13,
    color: "#777",
  },
  icon: {
    marginLeft: 10,
  },
  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    borderRadius: 12,
    marginVertical: 8,
    marginRight:8
  },
});
