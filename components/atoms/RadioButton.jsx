import { Pressable, View, StyleSheet } from "react-native";
import { colors } from "@/theme/theme";

const RadioButton = ({ selected = false, onPress, style, ...props }) => {
  return (
    <Pressable style={style} onPress={onPress} {...props}>
      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioInner} />}
      </View>
    </Pressable>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors["grey-200"],
    justifyContent: "center",
    alignItems: "center",
  },
  radioSelected: {
    borderColor: colors["primary-600"],
  },
  radioInner: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors["primary-600"],
  },
});
