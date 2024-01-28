import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  Platform,
  ActivityIndicator,
} from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AirbnbRating } from "react-native-ratings";
import UserAvatar from "react-native-user-avatar";

import AppText from "../components/AppText";
import colors from "../../config/colors";
import { useEffect, useState } from "react";
import Spacer from "../components/Spacer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addReview, getPlaceDetails, getPlaceReviews } from "../../config/api";
import AppInput from "../components/AppInput";
import { useToast } from "react-native-toast-notifications";
import { storeFavoriteDestination } from "../../config/storage";

const DestinationDetailScreen = () => {
  const route = useRoute();
  const toast = useToast();
  const navigation = useNavigation();
  const { id } = route.params;
  const [place, setPlace] = useState({});
  const [reviewLoader, setReviewLoader] = useState(false);
  const [userRating, setUserRating] = useState({
    rating: 0,
    review: "",
  });
  const [activeImage, setActiveImage] = useState(null);
  const [reviews, setReviews] = useState([
    {
      $id: 1,
      name: "Saurav",
      date: "12th May, 2021",
      rating: 4.7,
      review:
        "Located in the Rudraprayag district of Uttarakhand, India, the Kedarnath Temple stands as a revered Hindu pilgrimage site and holds profound spiritual significance. Situated at an elevation of 3,583 meters (11,755 feet), amidst the majestic Garhwal Himalayas, this ancient temple is dedicated to Lord Shiva. Kedarnath Temple is one of the twelve Jyotirlingas, which are considered the most sacred abodes of Lord Shiva. The temple's history dates back over a thousand years and is believed to have been built by Adi Shankaracharya, the renowned philosopher-saint of India. The journey to Kedarnath Temple is not only a test of faith but also a breathtaking adventure. Pilgrims undertake a challenging trek of approximately 16 kilometers (10 miles) from Gaurikund, which involves traversing rugged terrain and steep slopes. The path is adorned with stunning natural beauty, including the Mandakini River, snow-capped peaks, and dense forests. Along the way, several smaller shrines and resting points provide solace and respite to the weary travelers. The temple itself is a magnificent stone structure, intricately adorned with ornate carvings and sculptures. The serene ambiance and the reverberating sound of sacred chants create a deeply spiritual atmosphere. Devotees offer prayers and seek blessings from Lord Shiva, who is believed to reside in Kedarnath in his form as the 'Lord of Kedar Khand.' Kedarnath Temple is not only a place of devotion but also a testament to human resilience and devotion.",
    },
    {
      $id: 2,
      name: "Saurav",
      date: "12th May, 2021",
      rating: 4.7,
      review:
        "Located in the Rudraprayag district of Uttarakhand, India, the Kedarnath Temple stands as a revered Hindu pilgrimage site and holds profound spiritual significance. Situated at an elevation of 3,583 meters (11,755 feet), amidst the majestic Garhwal Himalayas, this ancient temple is dedicated to Lord Shiva. Kedarnath Temple is one of the twelve Jyotirlingas, which",
    },
  ]);

  useEffect(() => {
    async function fetchPlaceDetail() {
      const result = await getPlaceDetails(id);
      console.log(result);
      setPlace(result?.documents[0]);
      setActiveImage(result?.documents[0]?.image[0]);
    }

    async function fetchPlacesReview() {
      const reviews = await getPlaceReviews(id);
      setReviews(reviews?.documents?.reverse());
    }

    fetchPlaceDetail();
    fetchPlacesReview();
  }, []);

  const handleOnViewInMapPress = () => {
    // open google map via linking using places?.coordinate[lat, long]
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${place?.coordinates[0]},${place?.coordinates[1]}`;
    const label = place?.title;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  const handleAddReview = async () => {
    // form validation
    if (userRating.rating === 0) {
      toast.show("Please select rating", {
        type: "danger",
      });

      return;
    }

    if (userRating.review === "") {
      toast.show("Please add review", {
        type: "danger",
      });
      return;
    }

    try {
      setReviewLoader(true);
      console.log(id, userRating.rating, userRating.review);
      const response = await addReview(
        id,
        userRating.rating,
        userRating.review
      );
      if (response?.success) {
        toast.show("Review added successfully", {
          type: "success",
          duration: 2000,
        });

        // reset user rating
        setUserRating({
          rating: 0,
          review: "",
        });

        // refresh reviews
        const reviews = await getPlaceReviews(id);
        setReviews(reviews?.documents?.reverse());

        setReviewLoader(false);
      }
      setReviewLoader(false);
    } catch (error) {
      console.log(error);
      setReviewLoader(false);
    }
  };

  const handleAddToFavorite = async () => {
    try {
      const destination = {
        id: place.$id,
        title: place.title,
        location: place.location_description,
        image: place.image[0],
      };

      await storeFavoriteDestination(destination);

      toast.show("Added to favorite", {
        type: "success",
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {Object.keys(place).length > 0 ? (
        <>
          <View style={styles.headerNavigationContainer}>
            <TouchableOpacity
              style={styles.backButtonContainer}
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.headerTitleContainer}>
              <AppText variant="SemiBold" style={styles.headerTitle}>
                {place?.title}
              </AppText>
            </View>

            <TouchableOpacity
              style={styles.headerRightContainer}
              activeOpacity={0.5}
              onPress={handleAddToFavorite}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.destinationImageContainer}>
              <Image
                source={{
                  uri: activeImage,
                }}
                style={styles.destinationImage}
              />
            </View>
            <View style={styles.imageContainer}>
              {place?.image?.map((image) => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={image}
                  onPress={() => setActiveImage(image)}
                >
                  <Image
                    source={{
                      uri: image,
                    }}
                    style={styles.destinationSmallImage}
                  />
                </TouchableOpacity>
              ))}
            </View>
            {place?.verification_status && (
              <View style={styles.verifiedBadgeContainer}>
                <AntDesign name="checkcircle" size={24} color="green" />
                <AppText variant="Medium" style={styles.verifiedBadgeText}>
                  Verified
                </AppText>
              </View>
            )}
            <View style={styles.destinationInfoContainer}>
              <View style={styles.destinationInfo}>
                <AppText variant="SemiBold" style={styles.destinationName}>
                  {place?.title}
                </AppText>
                <AppText variant="Medium" style={styles.destinationCountry}>
                  {place?.location_description}
                </AppText>
              </View>
              <View style={styles.badgeKeyword}>
                <AppText variant="Medium" style={styles.badgeKeywordText}>
                  {place?.keyword}
                </AppText>
              </View>
            </View>
            <View style={styles.postedByContainer}>
              <UserAvatar size={40} name={place?.author_id} />
              <View style={styles.authorNameContainer}>
                <AppText variant="Light" style={styles.postedByText}>
                  Posted By
                </AppText>
                <AppText variant="Medium" style={styles.postedByText}>
                  {place?.author_id}
                </AppText>
              </View>
            </View>
            <View style={styles.destinationInfoContainer}>
              <View style={styles.ratingContainer}>
                <AirbnbRating
                  count={5}
                  defaultRating={place?.average_rating}
                  size={15}
                  showRating={false}
                  isDisabled={true}
                />
                <AppText variant="Regular" style={styles.ratingText}>
                  {place?.average_rating} star average rating (
                  {place?.total_reviews})
                </AppText>
              </View>
            </View>

            <TouchableOpacity
              style={styles.viewInMapContainer}
              onPress={handleOnViewInMapPress}
            >
              <AppText variant="SemiBold" style={styles.viewInMapText}>
                View in Map
              </AppText>
            </TouchableOpacity>

            <View style={styles.destinationAboutContainer}>
              <AppText variant="Medium" style={styles.aboutDestinationText}>
                About the Destination
              </AppText>
              <AppText variant="Light" style={styles.aboutDestination}>
                {place?.place_description}
              </AppText>
            </View>

            <View style={styles.reviesContainer}>
              <AppText variant="SemiBold" style={styles.aboutDestinationText}>
                Reviews
              </AppText>
              <View style={styles.ratingInputContainer}>
                <AirbnbRating
                  count={5}
                  defaultRating={userRating?.rating}
                  size={15}
                  showRating={true}
                  onFinishRating={(rating) =>
                    setUserRating({ ...userRating, rating })
                  }
                />
              </View>
              {reviewLoader ? (
                <ActivityIndicator
                  size="large"
                  color={colors.black}
                  style={{ flex: 1 }}
                />
              ) : (
                <View style={styles.addReviewContainer}>
                  <View style={styles.addReviewInput}>
                    <AppInput
                      placeholder="Add Review"
                      boxed
                      onChangeText={(review) =>
                        setUserRating({ ...userRating, review })
                      }
                      value={userRating?.review}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.addReviewButtonContainer}
                    activeOpacity={0.5}
                    onPress={handleAddReview}
                  >
                    <AntDesign name="plus" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              )}

              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <View style={styles.reviewCardContainer} key={review?.$id}>
                    <View style={styles.reviewCardHeader}>
                      <UserAvatar size={40} name={review.name} />
                      <View style={styles.reviewCardHeaderInfo}>
                        <AppText
                          variant="Medium"
                          style={styles.reviewCardHeaderName}
                        >
                          {review?.author_id}
                        </AppText>
                        <AppText
                          variant="Regular"
                          style={styles.reviewCardHeaderPostedOn}
                        >
                          {new Date(review?.$createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </AppText>

                        <AppText
                          variant="Light"
                          style={styles.reviewCardHeaderPostedOn}
                        >
                          {review?.message}
                        </AppText>

                        <View style={styles.ratingContainer}>
                          <AirbnbRating
                            count={5}
                            defaultRating={review?.rating}
                            size={15}
                            showRating={false}
                            isDisabled={true}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                ))
              ) : (
                <AppText variant="Light" style={styles.aboutDestinationText}>
                  No Reviews
                </AppText>
              )}
            </View>
          </ScrollView>

          <Spacer height={height(5)} />
        </>
      ) : (
        <ActivityIndicator
          size="large"
          color={colors.black}
          style={{ flex: 1 }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerNavigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(5),
    paddingVertical: height(1),
  },
  backButtonContainer: {
    width: totalSize(4.3),
    height: totalSize(4.3),
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
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(5),
    paddingVertical: height(1),
  },
  destinationSmallImage: {
    width: width(15),
    height: width(15),
    borderRadius: width(2),
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
    fontSize: totalSize(1.7),
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
    fontSize: totalSize(1.6),
  },
  reviewCardHeaderPostedOn: {
    fontSize: totalSize(1.5),
    color: colors.gray,
  },

  addReviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: height(1),
  },
  addReviewInput: {
    width: "80%",
  },
  ratingInputContainer: {
    alignItems: "flex-start",
  },
  addReviewButtonContainer: {
    width: totalSize(5),
    height: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DestinationDetailScreen;
