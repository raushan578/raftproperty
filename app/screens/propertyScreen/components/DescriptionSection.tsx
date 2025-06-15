import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SCREEN_WIDTH } from "@/constants/constants";

interface DescriptionSectionProps {
  description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons
          name="information-circle-outline"
          size={20}
          color="#333"
          style={styles.icon}
        />
        <Text style={styles.headerText}>Property Description</Text>
      </View>

      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

export default DescriptionSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: SCREEN_WIDTH - 32,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    marginRight: 6,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  descriptionText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
});
