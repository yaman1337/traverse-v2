import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../config/colors";

import AppInput from "../components/AppInput";
import Button from "../components/Button";
import DestinationCard from "../components/DestinationCard";
import Spacer from "../components/Spacer";
import { getAllPlaces } from "../../config/api";
import { useNavigation } from "@react-navigation/native";

const SearchDestinationScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState([
    {
      $id: "1",
      name: "Paris",
      address: "33 Sukhumvit 3, Klongtoey Nuea, Bangkok 10110",
      image:
        "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      $id: "2",
      name: "Rome",
      address: "#2 in Best Places to Visit in Europe for 2023-2024",
      image:
        "https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      $id: "3",
      name: "Swiss Alps",
      address: "600 N Wolfe St, Baltimore, MD 21287",
      image:
        "https://images.pexels.com/photos/753772/pexels-photo-753772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  useEffect(() => {
    async function fetchPlaces() {
      try {
        setLoading(true);
        const result = await getAllPlaces();

        setDestinations(result?.documents);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlaces();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.black} />
      ) : (
        <>
          <View style={styles.searchContainer}>
            <AppInput placeholder="Search Destination or Places..." />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.resultContainer}
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

            <Spacer height={height(5)} />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
  },
});

export default SearchDestinationScreen;
