import { Pressable, View, StyleSheet } from "react-native";

import { colors } from "@/theme/theme";

import IconCheck from "@/assets/icons/icon-check.svg";

const Checkbox = ({ checked = false, onPress, style, ...props }) => {
  return (
    <Pressable onPress={onPress} style={style} {...props}>
      <View style={styles.box}>
        {checked && (
          <View style={styles.innerBox}>
            <IconCheck color={colors.white} width={16} height={16} />
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  box: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors["grey-200"],
    justifyContent: "center",
    alignItems: "center",
  },
  innerBox: {
    width: 24,
    height: 24,
    backgroundColor: colors["primary-600"],
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
