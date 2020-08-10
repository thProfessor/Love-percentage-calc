import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Displaylove = (prop) => {
  if (prop.data == "loading") {
    return <Text>wait kar bhai</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Percent:{prop.data.percentage}</Text>
        <Text style={styles.text}>result:{prop.data.result}</Text>
      </View>
    );
  }
};
export default Displaylove;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
