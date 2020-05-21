import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/icon.png")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jaket for sale</AppText>
        <AppText style={styles.price}>100€</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/icon.png")}
            subTitle="5 Listings"
            title="Alejandro"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
