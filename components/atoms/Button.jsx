import { StyleSheet, Text, Pressable } from "react-native";
import { colors, typography } from "@/theme/theme";

/**
 * Button component that supports:
 *   - variant: 'primary' | 'secondary' | 'tertiary'
 *   - size: 'large' | 'medium' | 'small'
 *   - disabled: boolean
 *
 * Each variant can have a unique style for the disabled/pressed states.
 */
const Button = ({
  variant = "primary", // e.g. 'primary', 'secondary', 'tertiary'
  size = "medium", // 'large', 'medium', 'small'
  label = "Button",
  onPress,
  disabled = false,
  style,
  ...props
}) => {
  // Container style callback
  const getContainerStyle = ({ pressed }) => {
    const containerStyles = [
      styles.container,
      styles[`${variant}Container`],
      styles[`${size}Container`],
      style,
    ];

    if (disabled) {
      // E.g. add a variant-specific disabled style
      containerStyles.push(styles[`${variant}DisabledContainer`]);
    } else if (pressed) {
      // E.g. add a variant-specific pressed style
      containerStyles.push(styles[`${variant}PressedContainer`]);
    }

    return containerStyles;
  };

  // Text style callback
  const getTextStyle = ({ pressed }) => {
    const textStyles = [
      styles.label,
      styles[`${variant}Label`],
      styles[`${size}Label`],
    ];

    if (disabled) {
      textStyles.push(styles[`${variant}DisabledLabel`]);
    } else if (pressed) {
      textStyles.push(styles[`${variant}PressedLabel`]);
    }

    return textStyles;
  };

  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={(pressState) => getContainerStyle(pressState)}
      {...props}
    >
      {({ pressed }) => <Text style={getTextStyle({ pressed })}>{label}</Text>}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  // Base container
  container: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "transparent",
  },

  //  Variant-specific container
  primaryContainer: {
    backgroundColor: colors["primary-600"],
  },
  secondaryContainer: {
    backgroundColor: colors["grey-50"],
  },
  tertiaryContainer: {
    borderColor: colors["grey-200"],
  },

  // Variant-specific disabled container
  primaryDisabledContainer: {
    backgroundColor: colors["primary-100"],
  },
  secondaryDisabledContainer: {
    backgroundColor: colors["grey-50"],
  },
  tertiaryDisabledContainer: {
    borderColor: colors["grey-50"],
  },

  // Variant-specific pressed container
  primaryPressedContainer: {
    backgroundColor: colors["primary-500"],
  },
  secondaryPressedContainer: {
    backgroundColor: "#E8EAED",
  },
  tertiaryPressedContainer: {
    borderColor: colors["grey-900"],
  },

  // Sizes
  largeContainer: {
    height: 55,
  },
  mediumContainer: {
    height: 47,
  },
  smallContainer: {
    height: 31,
  },

  // Label
  label: {
    textAlign: "center",
  },

  // Variant-specific label
  primaryLabel: {
    color: colors.white,
  },
  secondaryLabel: {
    color: colors["grey-900"],
  },
  tertiaryLabel: {
    color: colors["grey-900"],
  },

  // Variant-specific disabled label
  primaryDisabledLabel: {
    color: colors["primary-300"],
  },
  secondaryDisabledLabel: {
    color: colors["grey-300"],
  },
  tertiaryDisabledLabel: {
    color: colors["grey-300"],
  },

  // Label sizes
  largeLabel: {
    ...typography.body.large.bold,
  },
  mediumLabel: {
    ...typography.body.medium.bold,
  },
  smallLabel: {
    ...typography.body.small.bold,
  },
});
