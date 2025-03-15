import { Pressable, StyleSheet, Text, View } from "react-native";
import Checkbox from "../atoms/Checkbox";
import { colors, typography } from "@/theme/theme";

const TournamentTypeItem = ({
  title,
  description,
  selected = false,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, selected && styles.selectedContainer]}
    >
      <View style={styles.content}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View>
          <Checkbox checked={selected} size={16} />
        </View>
      </View>
    </Pressable>
  );
};

export default TournamentTypeItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: colors["grey-50"],
    borderWidth: 1,
    borderColor: colors["grey-100"],
    borderRadius: 12,
  },
  selectedContainer: {
    backgroundColor: colors["primary-100"],
    borderColor: colors["primary-200"],
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  description: {
    marginTop: 4,
    width: "auto",
    ...typography.body.small.medium,
    color: colors["grey-600"],
  },
  title: {
    ...typography.body.medium.bold,
  },
  descriptionText: {},
});
