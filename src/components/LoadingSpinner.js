import { View, StyleSheet, ActivityIndicator, Dimensions } from "react-native";
import { colors } from "../theme";

const LoadingSpinner = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color={colors.c1} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
});

export default LoadingSpinner;
