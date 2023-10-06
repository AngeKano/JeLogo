import { Image, FlatList, Pressable } from "react-native";
import React, { memo } from "react";
import Data from "./Data";

const MbSrvItem = (props) => {
  const { Data_Factures, Data_Pass, Data_Transaction } = Data;
  return (
    <FlatList
      data={
        props.label == "Paiements"
          ? Data_Factures
          : props.label == "Transfert et achat de Pass"
          ? Data_Pass
          : Data_Transaction
      }
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            item.option && item.pass
              ? props.navigate("Forfait", {
                  option: item.option,
                  nom: item.nom,
                  backgroundColor: item.backgroundColor,
                  textColor: item.textColor,
                })
              : item.option
              ? props.navigate("Page_select_Abn", {
                  option: item.option,
                  nom: item.nom,
                  backgroundColor: item.backgroundColor,
                  textColor: item.textColor,
                })
              : item.Option_Bnq
              ? props.navigate("Page_vir_bnq", {
                  option: item.Option_Bnq,
                  nom: item.nom,
                  backgroundColor: item.backgroundColor,
                  textColor: item.textColor,
                })
              : props.navigate("Opr2", {
                  label: item.nom,
                  img: item.text,
                  style: item.style,
                  operation: props.label,
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
    />
  );
};

export default memo(MbSrvItem);
