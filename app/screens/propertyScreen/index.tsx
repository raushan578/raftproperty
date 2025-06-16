import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Button,
} from "react-native";
import React from "react";
import Cards from "./components/Cards";
import PropertyInfo from "./components/PropertyInfo";
import ContactCard from "./components/ContactCard";
import MapLayout from "./components/MapLayout";
import { Stack, useLocalSearchParams } from "expo-router";
import { usePropertyById } from "./hooks/usePropertyDetail";
import { PropertyDetails } from "@/types/interface/DetailedProperty.interface";
import BookNowButton from "./components/BookNow";
import { useUserActions } from "./hooks/useUserActions";

const PropertyScreen: React.FC = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const propertyCardData: PropertyDetails | undefined = usePropertyById(
    id ?? ""
  );
  const { addBookingId } = useUserActions();

  if (!id) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>No Property ID provided.</Text>
      </View>
    );
  }

  if (!propertyCardData) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6C63FF" />
        <Text style={styles.loadingText}>Loading property details...</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerTitle: "" }} />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Property Details</Text>
        {/* <Cards property={propertyCardData} /> */}
        {propertyCardData?.features && (
          <PropertyInfo details={propertyCardData} />
        )}

        {propertyCardData?.coordinates && (
          <MapLayout coordinates={propertyCardData?.coordinates} />
        )}
        {propertyCardData?.contact && (
          <ContactCard contact={propertyCardData?.contact} />
        )}
      </ScrollView>
      <BookNowButton onPress={() => addBookingId(id)} />
    </>
  );
};

export default PropertyScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#555",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
