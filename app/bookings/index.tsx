import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/constants";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/userAtom";
import BookingCard from "./components/BookingCard";
import { propertiedDetailsAtom } from "@/lib/propertiesAtom";
import { FontAwesome } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useUserActions } from "../screens/propertyScreen/hooks/useUserActions";

const Booking = () => {
  const [userData] = useAtom(userAtom);
  const [propertyDetails] = useAtom(propertiedDetailsAtom);

  const bookings = propertyDetails.filter((property) =>
    userData?.bookings?.includes(property.id)
  );

  const {removeByBookingId} = useUserActions()
  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookingCard
            id={item.id}
            title={item.title}
            price={item.price}
            location={item.location}
            image={item.images[0]}
            onDelete={() => removeByBookingId(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
         ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <FontAwesome name="calendar-times-o" size={64} color="#999" />
          <Text style={styles.emptyText}>No bookings found</Text>
        </View>
      }
      contentContainerStyle={bookings.length === 0 && styles.centerContent}
      />
    </GestureHandlerRootView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.7,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 8,
  },
   emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 18,
    color: "#666",
    fontWeight: "500",
  },
  centerContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
