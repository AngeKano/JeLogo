import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React, {
  useCallback,
  useContext,
  useState,
  memo,
  useEffect,
} from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import VerifItem from "../components/VerifItem";
import { FlatList } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";
import BtnItem from "../components/BtnItem";
//
import * as LocalAuthentication from "expo-local-authentication";
//

SplashScreen.preventAutoHideAsync();

const VerificationN21 = ({ navigation: { navigate } }) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    // console.log("fall back to password authentification");
  };

  const alertComponent = (title, mess, btnTxt, BtnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: BtnFunc,
      },
    ]);
  };

  const TwoButtonAlert = () => {
    Alert.alert("Welcome to App", "subs", [
      {
        text: "Back",
      onPress: () => {/*console.log("Cancel Pressed")*/},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          /*
          console.log("Ok Pressed");*/
        },
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isBiometricAvailable) {
      return alertComponent(
        "Entrez votre code secret",
        "Biometric Authentification n'est pas supporter par cette appareil",
        "Ok",
        () => fallBackToDefaultAuth()
      );
    }
    let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
    }

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return alertComponent(
        "Biometric record not found",
        "Connecter vous avec votre code secret",
        "Ok",
        () => fallBackToDefaultAuth()
      );
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Connexion par empreinte digital",
      cancelLabel: "cancel",
      disableDeviceFallback: true,
    });

    if (biometricAuth) {
      // TwoButtonAlert();
      navigate("verificationN3");
    }
    // console.log({ isBiometricAvailable });
    // console.log({ supportedBiometrics });
    // console.log({ savedBiometrics });
    // console.log({ biometricAuth });
  };

  const { tabl } = useContext(AuthContext);
  const [pwd, setPwd] = useState([]);

  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const puce = [0, 1, 2, 3];

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <View style={{ alignItems: "center", flex: 2 }}>
        <VerifItem text="Entrez votre code secret" />
        <View style={styles.ViewPuce}>
          <View>
            <FlatList
              data={puce}
              horizontal
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.puce,
                    {
                      backgroundColor:
                        pwd.length > item
                          ? "#0372C1"
                          : "rgba(3, 114, 193, 0.25)",
                    },
                  ]}
                ></View>
              )}
            />
          </View>
        </View>
        <Text style={styles.TxtMdp}>Mot de passe oublié</Text>
      </View>

      <View
        onPress={() => navigate("verificationN22")}
        style={{
          flex: 1.5,
          gap: 8,
          width: "100%",
        }}
      >
        <View style={{ gap: 17 }}>
          <FlatList
            data={tabl}
            numColumns={4}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  flex: 1,
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  height: 50,
                }}
                onPress={() => {
                  typeof item != "object"
                    ? setPwd([...pwd, item])
                    : Object.values(item)[4].name == "fingerprint"
                    ? handleBiometricAuth()
                    : setPwd([]);
                }}
              >
                <Text style={{ fontSize: 20, fontFamily: "Nunito-Medium" }}>
                  {item}
                </Text>
              </Pressable>
            )}
          />
          <BtnItem
            text="Validez"
            navigation={() => navigate("verificationN3")}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(VerificationN21);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    marginTop: 116,
  },
  TxtMdp: {
    fontFamily: "Nunito-Medium",
    fontSize: 17,
    marginTop: 33,
    color: "#ABB0BC",
  },

  puce: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  ViewPuce: {
    flexDirection: "row",
    marginTop: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
