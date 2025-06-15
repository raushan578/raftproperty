import { Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Reference design sizes (e.g., iPhone X)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Scaling utils
const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Platform flags
const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
// Color palette
const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#FFFFFF',
  text: '#1C1C1E',
  gray: '#8E8E93',
  border: '#D1D1D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  white: '#FFFFFF',
  black: '#000000',
};

// Spacing system
const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// Font sizes
const FONTS = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

// Border radius
const RADIUS = {
  sm: 4,
  md: 8,
  lg: 16,
};


export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  scale,
  verticalScale,
  moderateScale,
  isIOS,
  isAndroid,
  COLORS,
  SPACING,
  FONTS, 
  RADIUS,
  
};
