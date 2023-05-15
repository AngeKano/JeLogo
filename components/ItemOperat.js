import { StyleSheet, View, FlatList } from "react-native";
import React, { memo } from "react";
import Data from "./Data";
import HistTrns from "./HistTrns";

const ItemOperat = () => {
  const { Data_Image } = Data;
  return (
    <>
      <FlatList
        data={Data_Image}
        renderItem={({ item }) => <HistTrns img={item.img} />}
        ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
      />
    </>
  );
};

export default memo(ItemOperat);

const styles = StyleSheet.create({});
