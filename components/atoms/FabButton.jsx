import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "@/theme/theme";

import IconAdd from "@/assets/icons/icon-add.svg";

const FabButton = ({
  onPress,
  style,
  size = 64,
  icon = <IconAdd color={"white"} width={size / 2} height={size / 2} />,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.fab,
        { width: size, height: size, borderRadius: size / 2 },
        pressed && styles.fabPressed,
        style,
      ]}
      {...props}
    >
      <View style={styles.iconContainer}>{icon}</View>
    </Pressable>
  );
};

export default FabButton;

const styles = StyleSheet.create({
  fab: {
    backgroundColor: colors["primary-600"],
    justifyContent: "center",
    alignItems: "center",
  },
  fabPressed: {
    backgroundColor: colors["primary-500"],
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
