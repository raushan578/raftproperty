import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  ViewStyle,
  GestureResponderEvent,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export interface ButtonComponentProps {
  fitText?: boolean;
  child?: React.ReactNode;
  onPress?: () => void;
  bounce?: boolean;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  buttonContainerStyle?: ViewStyle;
  text?: string;
  textStyles?: object;
  applyGrad?: boolean;
  gradColors?: string[];
  gradAngle?: number;
  icon?: React.ReactNode;
  loading?: boolean;
  scaleFactor?: number;
  loader?: {
    color: string;
    size: number;
  };
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  onLongPress?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  fitText,
  child,
  onPress,
  bounce,
  onPressIn,
  onPressOut,
  style,
  buttonContainerStyle,
  text,
  textStyles,
  applyGrad,
  gradColors = ['#000000', '#FFFFFF'],
  icon,
  loading,
  scaleFactor = 1,
  loader = {
    color: '#000000',
    size: 20,
  },
  LeftIcon,
  RightIcon,
  onLongPress,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
    onPressIn?.(null as any);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
    onPressOut?.(null as any);
  };

  const handleLongPress = () => {
    scale.value = withSpring(0.97);
    onLongPress?.();
  };

  const buttonContent = (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {LeftIcon && <View style={{ marginRight: 8 }}>{LeftIcon}</View>}
      {loading ? (
        <ActivityIndicator color={loader.color} size={loader.size} />
      ) : (
        <>
          {icon}
          {text && <Text style={[styles.text, textStyles]}>{text}</Text>}
        </>
      )}
      {RightIcon && <View style={{ marginLeft: 8 }}>{RightIcon}</View>}
    </View>
  );

  const Wrapper = bounce ? Animated.View : View;

  return (
    <Wrapper style={[styles.buttonContainer, bounce ? animatedStyle : {}, buttonContainerStyle]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handleLongPress}
        disabled={loading}
      >
        {applyGrad ? (
          <LinearGradient
            style={[styles.button, style]}
            colors={gradColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            {child || buttonContent}
          </LinearGradient>
        ) : (
          <View style={[styles.button, style]}>{child || buttonContent}</View>
        )}
      </Pressable>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ButtonComponent;
