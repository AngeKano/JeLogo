import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ItemParam from "../components/ItemParam";
import Data from "../components/Data";

const { Data_Parametre } = Data;
const Parametre = () => {
  const { imageUser, numero, nom } = useContext(AuthContext);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          margin: 10,
        }}
      >
        <Image
          source={typeof imageUser == "number" ? imageUser : { uri: imageUser }}
          style={{ width: 70, height: 70, borderRadius: 100 }}
        />
        <View>
          <Text style={{ fontSize: 21, fontFamily: "Nunito-Bold" }}>{nom}</Text>
          <Text style={{ fontFamily: "Nunito-Regular" }}>+225 {numero}</Text>
        </View>
      </View>
      <View>
        <ItemParam data={Data_Parametre}/>
      </View>
    </View>
  );
};

export default Parametre;

const styles = StyleSheet.create({});
