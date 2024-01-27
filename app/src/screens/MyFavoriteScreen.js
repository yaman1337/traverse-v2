import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View, ScrollView, Modal, Image } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import Button from "../components/Button";
import FavoriteCard from "../components/FavoriteCard";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyFavoriteScreen() {
  const [showModal, setShowModal] = useState(false);
  const [focusedFavorite, setFocusedFavorite] = useState(null);
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      title: "Paris",
      description:
        "City of Lights is the capital of France. It is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
      image: "https://cdn-icons-png.flaticon.com/512/299/299068.png",
      subText: "City of Lights",
      onPress: () => {
        setFocusedFavorite(destinations[0]);
        setShowModal(true);
      },
    },
    {
      id: 2,
      title: "Tokyo",
      description:
        "Vibrant Metropolis is the capital of Japan. It is a major Japanese city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
      image: "https://cdn-icons-png.flaticon.com/512/330/330379.png",
      subText: "Vibrant Metropolis",
      onPress: () => {
        setFocusedFavorite(destinations[1]);
        setShowModal(true);
      },
    },
    {
      id: 3,
      title: "New York",
      description:
        "The Big Apple is the capital of the world. It is a major American city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176111.png",
      subText: "The Big Apple",
      onPress: () => {
        setFocusedFavorite(destinations[2]);
        setShowModal(true);
      },
    },
    // Add more destinations as needed
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText variant="Bold" style={styles.screenHeaderTitle}>
          My Favorites
        </AppText>

        <View style={styles.reportContainer}>
          {destinations.map((destination) => (
            <FavoriteCard
              key={destination.id}
              image={destination.image}
              subText={destination.subText}
              onPress={destination.onPress}
              variant="SemiBold"
            >
              {destination.title}
            </FavoriteCard>
          ))}

          {/* <Button backgroundColor={colors.black} textColor={colors.white}>
            Share Report
          </Button> */}
        </View>

        <Spacer size={14} />
      </ScrollView>

      <Modal visible={showModal} animationType="slide">
        <ScrollView>
          <View style={styles.modalContainer}>
            <AntDesign
              name="close"
              size={28}
              color={colors.black}
              onPress={() => setShowModal(false)}
              style={{ alignSelf: "flex-end" }}
            />

            <AppText variant="Bold" style={styles.screenHeaderTitle}>
              {focusedFavorite?.title || "Your"}
            </AppText>

            <Image
              source={{ uri: focusedFavorite?.image }}
              style={styles.modalHeaderImage}
            />

            <AppText variant="Bold" style={styles.modalHeaderSubText}>
              {focusedFavorite?.subText || "No Report"}
            </AppText>

            <AppText style={styles.modalDescriptionText}>
              {focusedFavorite?.description ||
                "No report available for this destination"}
            </AppText>

            {focusedFavorite?.id === 3 && (
              <View style={styles.modalHorizontalImages}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Image
                    source={{
                      uri: "https://cdn.hswstatic.com/gif/nyc.jpg",
                    }}
                    style={styles.modalImages}
                  />
                  <Image
                    source={{
                      uri: "https://images.squarespace-cdn.com/content/v1/518a56c0e4b0f73b5500b4b6/1676048351752-YTIHLHVXGKTRNANWDFK4/apple+2.jpg?format=1000w",
                    }}
                    style={styles.modalImages}
                  />
                  <Image
                    source={{
                      uri: "https://images.squarespace-cdn.com/content/v1/518a56c0e4b0f73b5500b4b6/1676048351752-YTIHLHVXGKTRNANWDFK4/apple+2.jpg?format=1000w",
                    }}
                    style={styles.modalImages}
                  />
                </ScrollView>
              </View>
            )}

            <Button backgroundColor={colors.black} textColor={colors.white}>
              Remove from Favorites
            </Button>
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
    paddingVertical: height(3),
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
    paddingVertical: height(2),
  },
  modalHeaderImage: {
    width: totalSize(15),
    height: totalSize(15),
    alignSelf: "center",
    marginVertical: height(2),
  },
  modalHeaderSubText: {
    fontSize: totalSize(4),
    marginTop: height(2),
    textAlign: "center",
  },
  modalDescriptionText: {
    fontSize: totalSize(1.7),
    textAlign: "justify",
    marginBottom: height(2),
  },
  modalHorizontalImages: { alignItems: "center" },
  modalImages: {
    width: width(80),
    height: height(40),
    marginHorizontal: width(2),
    borderRadius: 10,
  },
  // Screen Styles
  screenHeaderTitle: {
    fontSize: totalSize(2.5),
    marginTop: height(1),
  },
  reportContainer: {
    marginTop: height(2),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});