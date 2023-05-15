import { StyleSheet, FlatList, View } from "react-native";
import React, { memo } from "react";
import Data from "./Data";
import HistItems from "./HistItems";

const ItemDate = (props) => {
  const { Data_Date, Data_Operation } = Data;
  return (
    <>
      <FlatList
        data={props.date ? Data_Date : Data_Operation}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        renderItem={({ item }) => <HistItems label={item.nom} />}
      />
    </>
  );
};

export default memo(ItemDate);

const styles = StyleSheet.create({});
