import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface Feature {
  icon: string;
  label: string;
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface PropertyDetails {
  features: Feature[];
  rating: number;
  reviewsCount: number;
  reviews: Review[];
  size: string;
  yearBuilt: number;
}

const { width } = Dimensions.get("window");

const PropertyInfo: React.FC<{ details: PropertyDetails }> = ({ details }) => {
  const renderFeature = ({ item }: { item: Feature }) => (
    <View style={styles.featureItem}>
      <MaterialCommunityIcons name={item.icon} size={20} color="#333" />
      <Text style={styles.featureText}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Amenities</Text>

      <View style={styles.featuresGrid}>
        {details.features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <MaterialCommunityIcons
              name={feature.icon}
              size={20}
              color="#333"
            />
            <Text style={styles.featureText}>{feature.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.detailsRow}>
        <Text style={styles.rating}>
          ⭐ {details.rating}{" "}
          <Text style={styles.reviewText}>
            ({details.reviewsCount} reviews)
          </Text>
        </Text>
        <Text style={styles.detail}>📐 {details.size}</Text>
        <Text style={styles.detail}>📅 {details.yearBuilt}</Text>
      </View>
      <View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#222",
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  featureItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 6,
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  reviewText: {
    color: "#666",
  },
  detail: {
    fontSize: 14,
    color: "#333",
  },
});

export default PropertyInfo;
