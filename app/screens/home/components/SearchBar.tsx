import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";
import ButtonComponent from "@/components/custom/ButtonComponent";
import { SCREEN_WIDTH, COLORS, SPACING, RADIUS } from "@/constants/constants";
import { useAtom, useSetAtom } from "jotai";
import { propertiesAtom } from "@/lib/propertiesAtom";
import { filterProperties } from "../filterProperties";
import { searchAtom } from "@/lib/atoms";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  inputProps?: TextInputProps;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  value,
  onChangeText,
  inputProps,
}) => {
  const [internalValue, setInternalValue] = useState("");

  const currentValue = value ?? internalValue;
  const [properties] = useAtom(propertiesAtom);
  const setSearchText = useSetAtom(searchAtom);

  const handleTextChange = (text: string) => {
    setInternalValue(text);
    onChangeText?.(text);
    setSearchText(text);
  };

  const handleClear = () => {
    setInternalValue("");
    onChangeText?.("");
    setSearchText("");
  };

  return (
    <View style={styles.wrapper}>
      <ButtonComponent
        child={
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor={COLORS.gray}
              value={currentValue}
              onChangeText={handleTextChange}
              {...inputProps}
            />
          </View>
        }
        bounce={false}
        style={styles.buttonStyle}
        buttonContainerStyle={styles.noBackground}
      />

      {currentValue.length >= 1 && (
        <ButtonComponent
          style={styles.cancelIcon}
          onPress={handleClear}
          child={<Text style={styles.cancelText}>✕</Text>}
        ></ButtonComponent>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginTop: 8,
    justifyContent: "center",
  },
  inputContainer: {
    width: SCREEN_WIDTH - SPACING.md * 2,
    height: 46,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    paddingHorizontal: SPACING.sm,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
  },
  buttonStyle: {
    width: "100%",
    height: 40,
    justifyContent: "center",
  },
  noBackground: {
    backgroundColor: "transparent",
  },
  cancelIcon: {
    position: "absolute",
    right: 16,
    top: -36,
    zIndex: 10,
    padding: 4,
  },
  cancelText: {
    fontSize: 18,
    color: COLORS.gray,
  },
});
