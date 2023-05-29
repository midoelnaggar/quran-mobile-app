import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import SuraHeader from "../components/SuraHeader";
import PageSwiper from "../components/PageSwiper";
import { StatusBar } from "expo-status-bar";

const SuraScreen = () => {
  const { currentReading } = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SuraHeader
        page={currentReading.page}
        suraName={currentReading.suraName}
      />
      <PageSwiper currentPage={currentReading.page} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default SuraScreen;
