import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

// Interface
export interface ContactDetails {
  name: string;
  phone: string;
  email: string;
  agency: string;
}

// Component
const ContactCard: React.FC<{ contact: ContactDetails }> = ({ contact }) => {
  const handleCall = () => Linking.openURL(`tel:${contact?.phone}`);
  const handleEmail = () => Linking.openURL(`mailto:${contact?.email}`);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Agent</Text>

      <View style={styles.infoRow}>
        <MaterialIcons name="person" size={20} color="#444" />
        <Text style={styles.infoText}>{contact.name}</Text>
      </View>

      <View style={styles.infoRow}>
        <Feather name="briefcase" size={20} color="#444" />
        <Text style={styles.infoText}>{contact.agency}</Text>
      </View>

      <TouchableOpacity onPress={handleCall} style={styles.infoRow}>
        <Feather name="phone-call" size={20} color="#007BFF" />
        <Text style={[styles.infoText, styles.link]}>{contact?.phone}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEmail} style={styles.infoRow}>
        <Feather name="mail" size={20} color="#007BFF" />
        <Text style={[styles.infoText, styles.link]}>{contact?.email}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 150
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 14,
    color: "#222",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 10,
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});

export default ContactCard;
