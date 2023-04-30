import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Opr5 = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>Opr5</Text>
      <Button title="Accueil" onPress={() => navigate("Accueil")} />
    </View>
  );
};

export default Opr5;

const styles = StyleSheet.create({});
