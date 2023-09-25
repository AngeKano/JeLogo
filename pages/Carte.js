import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native-gesture-handler";
import Data from "../components/Data";
import { AntDesign } from "@expo/vector-icons";

const { Banque_Setting, Data_Null } = Data;

const Carte = () => {
  const { nom } = useContext(AuthContext);
  return (
    <FlatList
      data={Data_Null}
      style={{
        paddingBottom: 100,
      }}
      renderItem={({ item }) => (
        <View>
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              fontSize: 22,
              marginVertical: 20,
            }}
          >
            Bonjour {nom} 👋
          </Text>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={{
              width: Dimensions.get("window").width * 0.87,
              height: Dimensions.get("window").height * 0.25,
              backgroundColor: "#0372C1",
              borderRadius: 10,
              alignSelf: "center",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Nunito-Regular",
                  fontSize: 20,
                }}
              >
                {nom}
              </Text>
              <Image
                source={require("../assets/playstoreSize.png")}
                style={{
                  height: 40,
                  width: 80,
                }}
                resizeMode="contain"
              />
            </View>

            <Image
              source={require("../assets/qrcode.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text
              style={{
                color: "white",
                fontFamily: "Nunito-Regular",
                fontSize: 17,
              }}
            >
              XXXX XXXX XXXX 1234
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ color: "white", fontFamily: "Nunito-Regular" }}>
                  Exp Date
                </Text>
                <Text style={{ color: "white", fontFamily: "Nunito-Regular" }}>
                  **/**
                </Text>
              </View>

              <View>
                <Text style={{ color: "white", fontFamily: "Nunito-Regular" }}>
                  CVV
                </Text>
                <Text style={{ color: "white", fontFamily: "Nunito-Regular" }}>
                  ***
                </Text>
              </View>
              <Image
                source={require("../assets/visa.png")}
                style={{
                  width: 70,
                  height: 30,
                }}
                resizeMode="contain"
              />
            </View>
          </LinearGradient>

          <View style={{ marginHorizontal: 15, marginTop: 30 }}>
            <FlatList
              data={Banque_Setting}
              ItemSeparatorComponent={() => <View style={{ height: 27 }} />}
              renderItem={({ item }) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 17,
                    }}
                  >
                    {item.Icon}
                    <View>
                      <Text style={{ fontSize: 18, fontFamily: "Nunito-Bold" }}>
                        {item.Label}
                      </Text>
                      <Text
                        style={{ fontSize: 15, fontFamily: "Nunito-Light" }}
                      >
                        {item.Desicrpt}
                      </Text>
                    </View>
                  </View>

                  <AntDesign name="right" size={18} color="gray" />
                </View>
              )}
            />
          </View>
        </View>
      )}
    />
  );
};

export default Carte;

const styles = StyleSheet.create({});
