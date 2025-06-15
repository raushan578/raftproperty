import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import ProfileScreen from "../screens/profiles";
import Booking from "../bookings";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Bookings</Text>
      <Booking />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6309d9",
  },
  text:{
    fontSize:20,
    alignSelf:"center",
    marginTop:100,
    color:"#fff",
    fontWeight:"bold"
  }
});
