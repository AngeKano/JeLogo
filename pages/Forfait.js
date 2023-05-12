import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ForItems from "../components/ForItems";

const Forfait = ({ route, navigation: { navigate } }) => {
  return (
    <View>
      <Text>Test</Text>
      <View>

      <ForItems data={route.params.option} navigate = {navigate}/>
      </View>
    </View>
  );
};

export default Forfait;

const styles = StyleSheet.create({});
