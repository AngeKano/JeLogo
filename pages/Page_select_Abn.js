import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const Page_select_Abn = ({ route, navigation: { navigate } }) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "white",
          marginBottom: 10
        }}
      >
        <Text style={{fontFamily: 'Nunito-Bold', fontSize: 20}}>{route.params.nom}</Text>
      </View>
      <FlatList
        data={route.params.option}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              route.params.nom == "Factures" ?
              navigate("Abonement", {
                option: item.option,
                nom: item.nom,
                backgroundColor: item.backgroundColor,
                textColor: item.textColor,
              }) :  navigate("Paiment_scan", {
                option: item.option,
                nom: item.nom,
                backgroundColor: item.backgroundColor,
                textColor: item.textColor,
              }) 
            }
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomColor: "#D8D8D8",
              borderBottomWidth: 0.5,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                source={item.text}
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: 5,
                  marginBottom: 5,
                }}
              />
              <Text style={{ fontFamily: "Nunito-SemiBold", fontSize: 17 }}>
                {item.nom}
              </Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Page_select_Abn;

const styles = StyleSheet.create({});
