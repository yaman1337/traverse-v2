import { View, Text, StyleSheet } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../components/AppText";

const MyTourScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppText variant="Bold" style={styles.headerTitle}>
        Coming Soon
      </AppText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: totalSize(2),
    marginTop: height(3),
  },
});

export default MyTourScreen;
