import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeFavoriteDestination = async (destination) => {
  try {
    // check if the destination is already in the favorite list
    const favorites = await getFavoriteDestination();

    if (favorites) {
      const isExist = favorites.find((item) => item.id === destination.id);
      if (isExist) {
        return;
      }
    }

    // if not, add the destination to the existing list
    const value = JSON.stringify([...favorites, destination]);
    await AsyncStorage.setItem("@favorite", value);
  } catch (e) {
    console.log(e);
  }
};

export const getFavoriteDestination = async () => {
  try {
    const value = await AsyncStorage.getItem("@favorite");
    if (value !== null && value !== undefined) {
      return JSON.parse(value);
    }
    return [];
  } catch (e) {
    console.log(e);
  }
};

export const removeFavoriteDestination = async (id) => {
  try {
    const favorites = await getFavoriteDestination();
    const newFavorites = favorites.filter((item) => item.id !== id);
    const value = JSON.stringify(newFavorites);
    await AsyncStorage.setItem("@favorite", value);

    return newFavorites;
  } catch (e) {
    console.log(e);
  }
};

export const removeAllFavoriteDestination = async () => {
  try {
    await AsyncStorage.removeItem("@favorite");
    return [];
  } catch (e) {
    console.log(e);
  }
};
