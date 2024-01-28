import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import { AntDesign } from "@expo/vector-icons";

export default function MedicationCard({
  title = "Tour",
  location = "location",
  subtitle,
  image = "https://integratedlaboratories.in/wp-content/uploads/2022/08/Paracetamol-500mg-Tablets-Intemol-500-2.jpeg",
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={styles.tourCard}
      activeOpacity={0.7}
      onPress={onPress}
    >
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: height(0.5),
          }}
        >
          {/* location logo */}
          <AntDesign name="enviromento" size={totalSize(1.5)} />
          <AppText variant="Medium" style={styles.tourLocation}>
            {location}
          </AppText>
        </View>
        {subtitle && (
          <AppText variant="Light" style={styles.tourCardSubtitle}>
            {subtitle}
          </AppText>
        )}
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
    marginLeft: width(1),
  },
  tourCardSubtitle: {
    fontSize: totalSize(1.5),
  },
});
