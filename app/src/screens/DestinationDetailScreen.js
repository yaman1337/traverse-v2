import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AirbnbRating } from "react-native-ratings";
import UserAvatar from "react-native-user-avatar";

import AppText from "../components/AppText";
import colors from "../../config/colors";
import { useState } from "react";

const DestinationDetailScreen = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Saurav",
      date: "12th May, 2021",
      rating: 4.7,
      review:
        "Located in the Rudraprayag district of Uttarakhand, India, the Kedarnath Temple stands as a revered Hindu pilgrimage site and holds profound spiritual significance. Situated at an elevation of 3,583 meters (11,755 feet), amidst the majestic Garhwal Himalayas, this ancient temple is dedicated to Lord Shiva. Kedarnath Temple is one of the twelve Jyotirlingas, which are considered the most sacred abodes of Lord Shiva. The temple's history dates back over a thousand years and is believed to have been built by Adi Shankaracharya, the renowned philosopher-saint of India. The journey to Kedarnath Temple is not only a test of faith but also a breathtaking adventure. Pilgrims undertake a challenging trek of approximately 16 kilometers (10 miles) from Gaurikund, which involves traversing rugged terrain and steep slopes. The path is adorned with stunning natural beauty, including the Mandakini River, snow-capped peaks, and dense forests. Along the way, several smaller shrines and resting points provide solace and respite to the weary travelers. The temple itself is a magnificent stone structure, intricately adorned with ornate carvings and sculptures. The serene ambiance and the reverberating sound of sacred chants create a deeply spiritual atmosphere. Devotees offer prayers and seek blessings from Lord Shiva, who is believed to reside in Kedarnath in his form as the 'Lord of Kedar Khand.' Kedarnath Temple is not only a place of devotion but also a testament to human resilience and devotion.",
    },
    {
      id: 2,
      name: "Saurav",
      date: "12th May, 2021",
      rating: 4.7,
      review:
        "Located in the Rudraprayag district of Uttarakhand, India, the Kedarnath Temple stands as a revered Hindu pilgrimage site and holds profound spiritual significance. Situated at an elevation of 3,583 meters (11,755 feet), amidst the majestic Garhwal Himalayas, this ancient temple is dedicated to Lord Shiva. Kedarnath Temple is one of the twelve Jyotirlingas, which",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerNavigationContainer}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          activeOpacity={0.5}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <AppText variant="SemiBold" style={styles.headerTitle}>
            KedarNath Temple
          </AppText>
        </View>

        <TouchableOpacity
          style={styles.headerRightContainer}
          activeOpacity={0.5}
        >
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.destinationImageContainer}>
          <Image
            source={{
              uri: "https://cloud.appwrite.io/v1/storage/buckets/traverse/files/6489f447aa9ee5fdc82f/view?project=64777ba0910c827a975b&mode=admin",
            }}
            style={styles.destinationImage}
          />
        </View>
        <View style={styles.verifiedBadgeContainer}>
          <AntDesign name="checkcircle" size={24} color="green" />
          <AppText variant="Medium" style={styles.verifiedBadgeText}>
            Verified
          </AppText>
        </View>
        <View style={styles.destinationInfoContainer}>
          <View style={styles.destinationInfo}>
            <AppText variant="SemiBold" style={styles.destinationName}>
              KedarNath Temple
            </AppText>
            <AppText variant="Medium" style={styles.destinationCountry}>
              India
            </AppText>
          </View>
          <View style={styles.badgeKeyword}>
            <AppText variant="Medium" style={styles.badgeKeywordText}>
              Historical
            </AppText>
          </View>
        </View>
        <View style={styles.postedByContainer}>
          <UserAvatar size={40} name="Saurav" />
          <View style={styles.authorNameContainer}>
            <AppText variant="Light" style={styles.postedByText}>
              Posted By
            </AppText>
            <AppText variant="Medium" style={styles.postedByText}>
              Saurav
            </AppText>
          </View>
        </View>
        <View style={styles.destinationInfoContainer}>
          <View style={styles.ratingContainer}>
            <AirbnbRating
              count={5}
              defaultRating={4.7}
              size={15}
              showRating={false}
              isDisabled={true}
            />
            <AppText variant="Regular" style={styles.ratingText}>
              4.7 star average rating
            </AppText>
          </View>
        </View>

        <TouchableOpacity style={styles.viewInMapContainer}>
          <AppText variant="SemiBold" style={styles.viewInMapText}>
            View in Map
          </AppText>
        </TouchableOpacity>

        <View style={styles.destinationAboutContainer}>
          <AppText variant="Medium" style={styles.aboutDestinationText}>
            About the Destination
          </AppText>
          <AppText variant="Light" style={styles.aboutDestination}>
            Located in the Rudraprayag district of Uttarakhand, India, the
            Kedarnath Temple stands as a revered Hindu pilgrimage site and holds
            profound spiritual significance. Situated at an elevation of 3,583
            meters (11,755 feet), amidst the majestic Garhwal Himalayas, this
            ancient temple is dedicated to Lord Shiva. Kedarnath Temple is one
            of the twelve Jyotirlingas, which are considered the most sacred
            abodes of Lord Shiva. The temple's history dates back over a
            thousand years and is believed to have been built by Adi
            Shankaracharya, the renowned philosopher-saint of India. The journey
            to Kedarnath Temple is not only a test of faith but also a
            breathtaking adventure. Pilgrims undertake a challenging trek of
            approximately 16 kilometers (10 miles) from Gaurikund, which
            involves traversing rugged terrain and steep slopes. The path is
            adorned with stunning natural beauty, including the Mandakini River,
            snow-capped peaks, and dense forests. Along the way, several smaller
            shrines and resting points provide solace and respite to the weary
            travelers. The temple itself is a magnificent stone structure,
            intricately adorned with ornate carvings and sculptures. The serene
            ambiance and the reverberating sound of sacred chants create a
            deeply spiritual atmosphere. Devotees offer prayers and seek
            blessings from Lord Shiva, who is believed to reside in Kedarnath in
            his form as the "Lord of Kedar Khand." Kedarnath Temple is not only
            a place of devotion but also a testament to human resilience and
            devotion.
          </AppText>
        </View>

        <View style={styles.reviesContainer}>
          <AppText variant="Medium" style={styles.aboutDestinationText}>
            Reviews
          </AppText>

          {reviews.map((review) => (
            <View style={styles.reviewCardContainer} key={review.id}>
              <View style={styles.reviewCardHeader}>
                <UserAvatar size={40} name={review.name} />
                <View style={styles.reviewCardHeaderInfo}>
                  <AppText variant="Medium" style={styles.reviewCardHeaderName}>
                    {review.name}
                  </AppText>
                  <AppText
                    variant="Light"
                    style={styles.reviewCardHeaderPostedOn}
                  >
                    {review.date}
                  </AppText>

                  <View style={styles.ratingContainer}>
                    <AirbnbRating
                      count={5}
                      defaultRating={review.rating}
                      size={15}
                      showRating={false}
                      isDisabled={true}
                    />
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
  headerNavigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(5),
    paddingVertical: height(1),
  },
  backButtonContainer: {
    width: totalSize(5),
    height: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: totalSize(2),
  },
  headerRightContainer: {
    width: totalSize(5),
    height: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
  },

  destinationImageContainer: {
    width: "100%",
    height: height(40),
  },
  destinationImage: {
    width: "100%",
    height: "100%",
  },
  destinationInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(5),
    paddingVertical: height(1),
  },
  destinationInfo: {
    paddingTop: height(1),
  },
  destinationName: {
    fontSize: totalSize(2.3),
  },
  destinationCountry: {
    fontSize: totalSize(2),
    color: colors.gray,
  },
  badgeKeyword: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: width(3),
    paddingVertical: height(1),
    borderRadius: width(2),
  },
  badgeKeywordText: {
    fontSize: totalSize(1.5),
    color: colors.gray,
  },
  postedByContainer: {
    flexDirection: "row",
    paddingLeft: width(5),
    justifyContent: "flex-start",
  },
  postedByText: {
    fontSize: totalSize(1.5),
    color: colors.gray,
    marginLeft: width(1),
  },
  authorNameContainer: {
    marginLeft: width(2),
  },
  verifiedBadgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: width(30),
    borderRadius: width(2),
    paddingHorizontal: width(3),
    paddingVertical: height(1),
    backgroundColor: colors.lightGray,
  },
  verifiedBadgeText: {
    fontSize: totalSize(1.5),
    color: "green",
    marginLeft: width(2),
  },
  destinationAboutContainer: {
    paddingHorizontal: width(5),
    paddingVertical: height(1),
  },
  aboutDestinationText: {
    fontSize: totalSize(2),
  },
  aboutDestination: {
    fontSize: totalSize(1.5),
    color: colors.gray,
    textAlign: "justify",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: totalSize(1.5),
    color: colors.gray,
    marginLeft: width(2),
  },
  viewInMapContainer: {
    backgroundColor: colors.black,
    paddingHorizontal: width(5),
    paddingVertical: height(1),
    borderRadius: width(2),
    marginVertical: height(1),
    marginHorizontal: width(5),
  },
  viewInMapText: {
    fontSize: totalSize(1.7),
    color: colors.white,
    textAlign: "center",
  },

  reviesContainer: {
    paddingHorizontal: width(5),
    paddingVertical: height(1),
  },
  reviewCardContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: width(2),
    padding: width(5),
    marginVertical: height(1),
  },
  reviewCardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewCardHeaderInfo: {
    marginLeft: width(2),
  },
  reviewCardHeaderName: {
    fontSize: totalSize(2),
  },
  reviewCardHeaderPostedOn: {
    fontSize: totalSize(1.5),
    color: colors.gray,
  },
});

export default DestinationDetailScreen;
