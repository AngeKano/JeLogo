import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const ShowCash = () => {
  const { montant } = useContext(AuthContext);
  const [cashVisible, setCashVisible] = useState(false);

  var payements = [];
  for (let pas = 0; pas < 5; pas++) {
    payements.push(<View key={pas} style={styles.btnItem}></View>);
  }

  return (
    <>
      <Pressable
        onPress={() => setCashVisible(!cashVisible)}
        style={styles.cash}
      >
        <View
          style={[
            styles.cashBtn,
            {
              display: cashVisible ? null : "none",
            },
          ]}
        >
          {payements}
        </View>
        <View style={styles.cashTxtContainer}>
          <Text
            style={[
              styles.cashTxt,
              {
                display: cashVisible ? "none" : null,
              },
            ]}
          >
            {montant} FCFA
          </Text>
        </View>
      </Pressable>
      {Dimensions.get("window").height < 600 ? (
        <View style={{ flex: 1, justifyContent: "flex-end" }}></View>
      ) : (
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={styles.sldTxt}>Solde disponible</Text>
        </View>
      )}
    </>
  );
};

export default ShowCash;

const styles = StyleSheet.create({
  cash: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cashBtn: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 10,
    gap: 10,
  },
  btnItem: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  cashTxtContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cashTxt: {
    fontSize: 25,
    fontFamily: "Nunito-Bold",
    color: "white",
    textAlign: "center",
  },
  sldTxt: {
    fontFamily: "Nunito-SemiBold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
});
