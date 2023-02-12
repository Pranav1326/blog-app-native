import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

const Template = () => {
  return (
    <View style={styles.template}>
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  template: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Template;
