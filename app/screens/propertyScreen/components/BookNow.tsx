import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import ButtonComponent from "@/components/custom/ButtonComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface Props {
  onPress: () => void; // async handler
}

const BookNowButton: React.FC<Props> = ({ onPress }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const insets = useSafeAreaInsets();

  const handlePress = () => {
    setLoading(true);
    try {
      onPress?.();
      setVisible(true);
      setTimeout(() => setVisible(false), 2500);
    } catch (err) {
      console.error("Booking failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <TouchableOpacity
          onPressIn={handlePress}
          style={[styles.button, loading && { backgroundColor: "#aaa" }]}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <View style={styles.row}>
              <FontAwesome
                name="calendar-check-o"
                size={20}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.text}>Book Now</Text>
            </View>
          )}
        </TouchableOpacity>
      <Modal
        visible={visible}
        transparent
        animationType="fade"

        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <LottieView
              source={require("../../../../assets/lottie/tick.json")}
              autoPlay
              loop={true}
              style={styles.lottie}
            />
            <Text style={styles.successText}>Booking Successful!</Text>
            <Text style={styles.subText}>
              Your stay has been reserved. We hope you enjoy your time at this
              property!
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default BookNowButton;

const styles = StyleSheet.create({

  button: {
      position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 999,
    flexDirection: "row",
    backgroundColor: "#6309d9",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: SCREEN_WIDTH - 40,
    bottom:80
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    width: SCREEN_WIDTH - 64,
  },
  lottie: {
    width: 140,
    height: 140,
  },
  successText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#28a745",
    marginTop: 16,
  },
  subText: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginTop: 8,
  },
});
