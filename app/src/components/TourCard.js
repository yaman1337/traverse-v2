import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";

export default function MedicationCard({
  title = "Tour",
  location = "location",
  subtitle = "Subtitle",
  image = "https://integratedlaboratories.in/wp-content/uploads/2022/08/Paracetamol-500mg-Tablets-Intemol-500-2.jpeg",
}) {
  return (
    <TouchableOpacity style={styles.tourCard} activeOpacity={0.7}>
      <View style={styles.tourCardImageContainer}>
        <Image
          style={styles.tourCardImage}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.tourCardDetails}>
        <AppText variant="Bold" style={styles.tourCardTitle}>
          {title}
        </AppText>
        <AppText variant="Medium" style={styles.tourLocation}>
          {location}
        </AppText>
        <AppText variant="Light" style={styles.tourCardSubtitle}>
          {subtitle}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tourCard: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.lightGray,
    borderRadius: totalSize(1),
    padding: width(3),
    marginBottom: height(1),
  },
  tourCardImageContainer: {
    width: width(20),
    height: width(20),
    borderRadius: totalSize(1),
    overflow: "hidden",
  },
  tourCardImage: {
    width: "100%",
    height: "100%",
  },
  tourCardDetails: {
    marginLeft: width(3),
  },
  tourCardTitle: {
    fontSize: totalSize(2),
  },
  tourLocation: {
    fontSize: totalSize(1.5),
  },
  tourCardSubtitle: {
    fontSize: totalSize(1.5),
  },
});
