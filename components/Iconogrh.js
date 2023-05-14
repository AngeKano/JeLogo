import { View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Data from "./Data";
import RenderItemIcon from "./RenderItemIcon";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Iconogrh = (props) => {
  const { Data_Iconographie } = Data;
  return (
    <FlatList
      numColumns={3}
      data={Data_Iconographie}
      ItemSeparatorComponent={() => (
        <View
          style={{
            minHeight: 30,
          }}
        />
      )}
      renderItem={({ item }) => <RenderItemIcon item={item} navigate={props} />}
    />
  );
};

export default Iconogrh;
