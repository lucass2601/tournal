import { StyleSheet, View } from "react-native";

const index = () => {
  return <View style={styles.container}></View>;
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
