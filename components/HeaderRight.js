import { View, Pressable, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const HeaderRight = ({ navigate }) => {
  const { imageUser } = useContext(AuthContext);
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 5,
        marginRight: 10,
        alignItems: "center",
      }}
    >
      <AntDesign name="lock" size={24} color="gray" />
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
          source={typeof imageUser == "number" ? imageUser : { uri: imageUser }}
          style={{ width: 40, height: 40, borderRadius: 100 }}
        />
      </Pressable>
    </View>
  );
};

export default HeaderRight;
