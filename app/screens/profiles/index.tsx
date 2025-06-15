import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { useAtom } from "jotai";
import { useNavigation } from "expo-router";
import { userAtom } from "@/lib/userAtom";

const { width } = Dimensions.get("window");

const ProfileScreen: React.FC = () => {
  const [user] = useAtom(userAtom);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Profile</Text>
        <Text style={styles.settingsIcon}>⚙️</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://imagedelivery.net/xE-VtsYZUS2Y8MtLMcbXAg/4a05b139a21e91fdb87f/sm", // Sample memoji or user avatar
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* Bookings Button */}
      <Pressable onPress={() => navigation.navigate("two" as never)}>
        <Text style={styles.seeBookings}>See All Bookings</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5D4FF",
    alignItems: "center",
    paddingTop: 60,
  },
  header: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  settingsIcon: {
    fontSize: 18,
  },
  card: {
    backgroundColor: "#fff",
    width: width * 0.9,
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 40,
    marginTop: 80,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#888",
  },
  seeBookings: {
    marginTop: 30,
    fontSize: 15,
    color: "#6A0DAD",
    textDecorationLine: "underline",
  },
});
