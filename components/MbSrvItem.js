import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  Button,
} from "react-native";
import React from "react";
// source={require("../assets/playstore.png")}

const Data = [
  {
    nom: "Orange Money",
    text: require("../assets/icons/Mobileservices.png"),
  },
  {
    nom: "Moov Money",
    text: require("../assets/icons/Group12.png"),
  },
  {
    nom: "MTN Money",
    text: require("../assets/icons/Group13.png"),
  },
  {
    nom: "Wave",
    text: require("../assets/icons/Group14.png"),
  },
];
const Data1 = [
  {
    nom: "Canal +",
    text: require("../assets/icons/factureItems/canal.png"),
  },
  {
    nom: "CIE",
    text: require("../assets/icons/factureItems/cie.png"),
  },
  {
    nom: "SODECI",
    text: require("../assets/icons/factureItems/sodeci.png"),
  },
  {
    nom: "pont HKB",
    text: require("../assets/icons/factureItems/hkb.png"),
  },
  {
    nom: "StarTimes",
    text: require("../assets/icons/factureItems/startimes.png"),
  },
];
const MbSrvItem = (props) => {
  return (
    <FlatList
      data={props.label == "Factures" ? Data1 : Data}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            props.navigate("Opr2", {
              label: item.nom,
              img: item.text,
            });
          }}
        >
          <Image
            source={item.text}
            style={{
              width: 154,
              height: 154,
              marginLeft: 5,
              marginBottom: 5,
            }}
          />
        </Pressable>
      )}
      style={styles.flatlist}
    />
  );
};

export default MbSrvItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
  },
  flatlist: {
    gap: 1,
  },
});
