import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";
import AppText from "./AppText";

export default function DestinationCard({
  name = "Bumrungrad Hospital",
  address = "33 Sukhumvit 3, Klongtoey Nuea, Bangkok 10110",
  image = "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={styles.destinationCard}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.destinationImage}
      />

      <AppText variant="Bold" style={styles.destinationName}>
        {name}
      </AppText>
      <AppText variant="Light" style={styles.destinationAddress}>
        {address}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  destinationCard: {
    backgroundColor: colors.lightGray,
    borderRadius: totalSize(1),
    padding: width(5),
    marginBottom: height(1),
    marginRight: width(5),
  },
  destinationImage: {
    width: "100%",
    height: height(20),
    borderRadius: totalSize(1),
  },
  destinationName: {
    fontSize: totalSize(2),
    marginTop: height(1.5),
  },
  destinationAddress: {
    fontSize: totalSize(1.5),
  },
});
