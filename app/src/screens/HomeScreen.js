import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import AppInput from "../components/AppInput";
import DestinationCard from "../components/DestinationCard";
import TourCard from "../components/TourCard";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getAllPlaces } from "../../config/api";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [destinations, setDestinations] = useState([
    {
      name: "Paris",
      address: "33 Sukhumvit 3, Klongtoey Nuea, Bangkok 10110",
      image:
        "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Rome",
      address: "#2 in Best Places to Visit in Europe for 2023-2024",
      image:
        "https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Swiss Alps",
      address: "600 N Wolfe St, Baltimore, MD 21287",
      image:
        "https://images.pexels.com/photos/753772/pexels-photo-753772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);
  const [tours, setTours] = useState([
    {
      title: "Brandenburg Gate",
      location: "Pariser Platz, 10117 Berlin, Germany",
      subtitle: "Historical place",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNaifG9JhlSPzLGHOn6hFKSlGWaXXhaIrPeCMdU=w408-h272-k-no",
    },
    {
      title: "Neuschwanstein Castle",
      location: "Neuschwansteinstraße 20, Germany",
      subtitle: "Castle",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOkBJCFelrfrrAn4gol-UuOyFmghhN7rgVNbaIv=w408-h304-k-no",
    },
    {
      title: "Reichstag Building",
      location: "Platz der Republik 1, Germany",
      subtitle: "Government office",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOg4a338WPyTLYJsKrECJKBG3pF-03escBQtgmV=w408-h272-k-no",
    },
  ]);

  useEffect(() => {
    async function fetchPlaces() {
      const result = await getAllPlaces();

      setDestinations(result?.documents);
    }

    fetchPlaces();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText variant="Bold" style={styles.screenHeaderTitle}>
          Recent Visited Destinations
        </AppText>

        <View style={styles.searchInput}>
          <AppInput
            placeholder="Search Destination or Places..."
            onPressIn={() => navigation.navigate("SearchDestinationScreen")}
          />
        </View>

        <AppText variant="Bold" style={styles.screenHeaderTitle}>
          Recently Visited
        </AppText>

        <ScrollView
          style={styles.destionationContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.$id}
              name={destination.title}
              address={destination.location_description}
              image={destination.image[0]}
              onPress={() =>
                navigation.navigate("DestinationDetailScreen", {
                  id: destination.$id,
                })
              }
            />
          ))}
        </ScrollView>

        <AppText variant="Bold" style={styles.screenHeaderTitle}>
          Most Viewed
        </AppText>

        <View style={styles.tourContainer}>
          {tours.map((tour) => (
            <TourCard
              key={tour.title}
              title={tour.title}
              location={tour.location}
              subtitle={tour.subtitle}
              image={tour.image}
              onPress={() => navigation.navigate("DestinationDetailScreen")}
            />
          ))}
        </View>

        <Spacer size={9} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
    // paddingTop: height(5),
  },
  screenHeaderTitle: {
    fontSize: totalSize(2.5),
    marginTop: height(1),
  },
  searchInput: {
    marginVertical: height(1),
  },
  destionationContainer: {
    marginTop: height(1),
  },
  tourContainer: {
    marginTop: height(1),
    paddingBottom: height(5),
  },
});
