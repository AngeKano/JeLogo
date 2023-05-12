import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AbnItems from "../components/AbnItems";

const Abonement = ({ route, navigation: { navigate } }) => {
  return (
    <View>
      <View
        style={[
          styles.barner,
          { backgroundColor: route.params.backgroundColor },
        ]}
      >
        <Text style={[styles.text, { color: route.params.textColor }]}>
          {route.params.nom}
        </Text>
      </View>
      <View>
        <AbnItems data={route.params} navigate={navigate} />
      </View>
    </View>
  );
};

export default Abonement;

const styles = StyleSheet.create({
  barner: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    fontSize: 22,
    fontFamily: "Nunito-Bold",
  },
});
