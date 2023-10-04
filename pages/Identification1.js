import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React, { useCallback, useContext, useRef, useState } from "react";
import VerifItem from "../components/VerifItem";
import { useFonts } from "expo-font";
import { AuthContext } from "../context/AuthContext";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import BtnItem from "../components/BtnItem";
import ConfimCode from "./ConfimCode";
import CustVerifItems from "../components/CustVerifItems";

const Identification1 = ({ navigation: { replace } }) => {
  ///
  const {
    imageCNI_RectoBD,
    imageCNI_VersoBD,
    setImageCNI_RectoBD,
    setImageCNI_VersoBD,
    imageUser,
    setImageUser,
  } = useContext(AuthContext);
  ////
  //
  const handle = () => {
    setImageCNI_RectoBD(imageCNI_Recto);
    setImageCNI_VersoBD(imageCNI_Verso);
    setImageUser(userImage);
  };
  //
  ///
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [imageCNI_Verso, setImageCNI_Verso] = useState(imageCNI_VersoBD);
  const [imageCNI_Recto, setImageCNI_Recto] = useState(imageCNI_RectoBD);
  const [userImage, setUserImage] = useState(imageUser);

  ///
  ////
  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    try {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    } catch {
      console.log("Erreur de police");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  ///
  ////
  const openCameraCNI_Recto = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 3],
      });
      if (!result.canceled) {
        setImageCNI_Recto(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error occurred while launching the camera: ", error);
    }
  };
  ////
  ///
  const userImage_Selfie = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 3],
      });
      if (!result.canceled) {
        setUserImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error occurred while launching the camera: ", error);
    }
  };
  ///
  ///
  const openCameraCNI_Verso = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 3],
      });
      if (!result.canceled) {
        setImageCNI_Verso(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error occurred while launching the camera: ", error);
    }
  };

  ////
  return (
    <ScrollView>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <CustVerifItems text="Piece d’identification" />
        <View style={{ marginVertical: 22, gap: 17, marginHorizontal: 10 }}>
          <View style={{ flexDirection: "column", alignSelf: "flex-start" }}>
            <Text style={{ fontFamily: "Nunito-SemiBold", fontSize: 17 }}>
              Type de document
            </Text>

            <Picker
              style={{ width: 250 }}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="CNI" value="CNI" />
              <Picker.Item label="Passeport" value="Passeport" />
              <Picker.Item
                label="Permis de conduire"
                value="Permis de conduire"
              />
              <Picker.Item
                label="Permis de conduire"
                value="Permis de conduire"
              />
              <Picker.Item
                label="Attestation d'identité"
                value="Attestation d'identité"
              />
              <Picker.Item
                label="Carte consulaire / titre de sejour"
                value="Carte consulaire / titre de sejour"
              />
              <Picker.Item label="Autres" value="Autres" />
            </Picker>

            <View
              style={{
                marginTop: 15,
                gap: 10,
                flexDirection: "row",
                marginHorizontal: 15,
                marginBottom: 20,
              }}
            >
              <Pressable
                style={{
                  width: "50%",
                  height: 200,
                  backgroundColor: "white",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => openCameraCNI_Recto()}
              >
                {imageCNI_Recto == null ? (
                  <View style={{ alignItems: "center", gap: 10 }}>
                    <MaterialIcons name="add-a-photo" size={50} color="gray" />
                    <Text
                      style={{ fontFamily: "Nunito-Medium", color: "gray" }}
                    >
                      Pièce Recto
                    </Text>
                  </View>
                ) : (
                  <Image
                    source={{ uri: imageCNI_Recto }}
                    style={{ width: "100%", height: 200, borderRadius: 15 }}
                  />
                )}
              </Pressable>
              <Pressable
                style={{
                  width: "50%",
                  height: 200,
                  backgroundColor: "white",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => openCameraCNI_Verso()}
              >
                {imageCNI_Verso == null ? (
                  <View style={{ alignItems: "center", gap: 10 }}>
                    <MaterialIcons name="add-a-photo" size={50} color="gray" />
                    <Text
                      style={{ fontFamily: "Nunito-Medium", color: "gray" }}
                    >
                      Pièce Verso
                    </Text>
                  </View>
                ) : (
                  <Image
                    source={{ uri: imageCNI_Verso }}
                    style={{ width: "100%", height: 200, borderRadius: 15 }}
                  />
                )}
              </Pressable>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable
                style={{
                  width: "50%",
                  height: 200,
                  backgroundColor: "white",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => userImage_Selfie()}
              >
                {typeof userImage == "number" ? (
                  <View style={{ alignItems: "center", gap: 10 }}>
                    <Entypo name="user" size={50} color="gray" />
                    <Text
                      style={{ fontFamily: "Nunito-Medium", color: "gray" }}
                    >
                      Prendre un selfie
                    </Text>
                  </View>
                ) : (
                  <Image
                    source={{ uri: userImage }}
                    resizeMode="center"
                    style={{
                      width: "100%",
                      height: 200,
                      borderRadius: 15,
                    }}
                  />
                )}
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 15 }}>
          <BtnItem
            text="Continuer"
            navigation={() => {
              handle(), replace("Identification");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Identification1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    paddingTop: Dimensions.get("window").height * 0.1,
  },
});
