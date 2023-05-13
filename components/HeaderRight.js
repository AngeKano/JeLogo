import { View, Pressable, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const HeaderRight = () => {
  return (
    <View style={{ flexDirection: "row", gap: 5, marginRight: 10 }}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "rgba(3, 114, 193, 0.43)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign name="bells" size={17} color="white" />
      </View>
      <Pressable onPress={() => navigate("compte")}>
        <Image
          source={require("../assets/icons/UserImage.png")}
          style={{ width: 40, height: 40 }}
        />
      </Pressable>
    </View>
  );
};

export default HeaderRight;
