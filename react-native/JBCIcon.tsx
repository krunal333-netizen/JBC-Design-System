
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, AccessibilityInfo, Platform, useColorScheme } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';

export interface JBCIconProps {
  /** SVG Path string or semantic key from JBC Design System */
  path: string;
  size?: 16 | 20 | 24 | 32 | 48;
  /** Theme-aware semantic color tokens */
  color?: 'primary' | 'secondary' | 'neutral' | string;
  animate?: boolean | 'fade' | 'scale' | 'rotate';
  /** Manual toggle for theme if not using system defaults */
  themeOverride?: 'light' | 'dark';
}

/**
 * JBC Design System Icon Component for React Native.
 * Supports theme tokens, SVG paths, and Animated API micro-interactions.
 */
export const JBCIcon: React.FC<JBCIconProps> = ({
  path,
  size = 24,
  color = 'neutral',
  animate = false,
  themeOverride
}) => {
  const systemTheme = useColorScheme();
  const theme = themeOverride || systemTheme || 'dark';
  const [reduceMotion, setReduceMotion] = React.useState(false);

  // Animation values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
  }, []);

  // Map semantic color tokens to hex values based on current theme
  const getIconColor = () => {
    const tokens = {
      primary: theme === 'dark' ? '#03FDDA' : '#00BFA5',
      secondary: theme === 'dark' ? '#FFD700' : '#E6C200',
      neutral: theme === 'dark' ? '#8B949E' : '#424A53',
    };
    return tokens[color as keyof typeof tokens] || color;
  };

  const handlePressIn = () => {
    if (!animate || reduceMotion) return;

    // Use else-if and type casting to correctly narrow the union type of animate ('boolean | string')
    // and prevent "no overlap" errors where TypeScript believes a comparison is impossible.
    if (animate === true || (animate as string) === 'scale') {
      Animated.timing(scaleAnim, {
        toValue: 1.04,
        duration: 200,
        easing: Easing.bezier(0, 0, 0.2, 1),
        useNativeDriver: true,
      }).start();
    } else if (animate === 'fade') {
      Animated.timing(opacityAnim, {
        toValue: 0.7,
        duration: 120,
        useNativeDriver: true,
      }).start();
    } else if (animate === 'rotate') {
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.timing(rotateAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
    ]).start();
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '8deg'],
  });

  return (
    <Animated.View
      onStartShouldSetResponder={() => true}
      onResponderGrant={handlePressIn}
      onResponderRelease={handlePressOut}
      style={{
        width: size,
        height: size,
        transform: [{ scale: scaleAnim }, { rotate: rotation }],
        opacity: opacityAnim,
      }}
    >
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path d={path} fill={getIconColor()} />
      </Svg>
    </Animated.View>
  );
};
