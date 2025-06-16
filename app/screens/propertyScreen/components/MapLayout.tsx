import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

interface Coordinates {
  lat: number;
  lng: number;
}

interface MapLayoutProps {
  coordinates: Coordinates;
}

const { width } = Dimensions.get("window");

const MapLayout: React.FC<MapLayoutProps> = ({ coordinates }) => {
  const region = {
    latitude: coordinates?.lat,
    longitude: coordinates?.lng,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Location</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        <Marker coordinate={{ latitude: coordinates?.lat, longitude: coordinates?.lng }} />
      </MapView>
    </View>
  );
};

export default MapLayout;
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  map: {
    width: width - 32,
    height: 200,
    borderRadius: 12,
  },
});
