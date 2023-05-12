import { StyleSheet, Image, FlatList, Pressable, Text } from "react-native";
import React from "react";
import DataMen from "./Data";

const MbSrvItem = (props) => {
  const { Data_Factures, Data_Pass, Data_Transaction } = DataMen;
  console.log(props.label);
  return (
    <FlatList
      data={
        props.label == "Paiements des factures"
          ? Data_Factures
          : props.label == "Transfert et achat de Pass"
          ? Data_Pass
          : Data_Transaction
      }
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            item.option
              ? props.navigate("Abonement", {
                  option: item.option,
                  nom: item.nom,
                  backgroundColor: item.backgroundColor,
                  textColor: item.textColor,
                })
              : props.navigate("Opr2", {
                  label: item.nom,
                  img: item.text,
                });
          }}
        >
          {console.log(item.option)}
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
