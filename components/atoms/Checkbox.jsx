import { Pressable, View, StyleSheet } from "react-native";

import { colors } from "@/theme/theme";

import IconCheck from "@/assets/icons/icon-check.svg";

const Checkbox = ({ checked = false, onPress, style, size = 24, ...props }) => {
  return (
    <Pressable onPress={onPress} style={style} {...props}>
      <View style={[styles.box, { width: size, height: size }]}>
        {checked && (
          <View style={[styles.innerBox, { width: size, height: size }]}>
            <IconCheck
              color={colors.white}
              width={size * (2 / 3)}
              height={size * (2 / 3)}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors["grey-200"],
    justifyContent: "center",
    alignItems: "center",
  },
  innerBox: {
    backgroundColor: colors["primary-600"],
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
