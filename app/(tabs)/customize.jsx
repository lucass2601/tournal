import { StyleSheet, Text, View } from "react-native";

const customize = () => {
  return (
    <View style={styles.container}>
      <Text>Customize</Text>
    </View>
  );
};

export default customize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
