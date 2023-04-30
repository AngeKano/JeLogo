import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import HistItems from "../components/HistItems";
import HistChart from "../components/HistChart";
import HistTrns from "../components/HistTrns";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const Historique = ({ navigation: { navigate } }) => {
  const [cashVisible, setCashVisible] = useState(true);

  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
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

  return (
    <ScrollView>
      <View onLayout={onLayoutRootView}>
        <Pressable
          onPress={() => setCashVisible(!cashVisible)}
          style={styles.cash}
        >
          <View
            style={[
              styles.cashBtn,
              {
                display: cashVisible ? null : "none",
              },
            ]}
          >
            <Image
              source={require("../assets/icons/cash.png")}
              style={{ width: 20, height: 20 }}
            />
            <Image
              source={require("../assets/icons/cash.png")}
              style={{ width: 20, height: 20 }}
            />
            <Image
              source={require("../assets/icons/cash.png")}
              style={{ width: 20, height: 20 }}
            />
            <Image
              source={require("../assets/icons/cash.png")}
              style={{ width: 20, height: 20 }}
            />
            <Image
              source={require("../assets/icons/cash.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
          <Text
            style={[
              styles.cashTxt,
              {
                display: cashVisible ? "none" : null,
              },
            ]}
          >
            123.233 FCFA
          </Text>
          <View style={styles.cashEye}>
            <Image
              source={require("../assets/icons/eyeon.png")}
              style={{
                width: 25,
                height: 21,
                display: cashVisible ? null : "none",
              }}
            />
            <Image
              source={require("../assets/icons/eyeoff.png")}
              style={{
                width: 25,
                height: 21,
                display: cashVisible ? "none" : null,
              }}
            />
          </View>
        </Pressable>
        <Text style={styles.sldTxt}>Solde disponible</Text>
        <Text style={styles.histTxt}>Historique de transaction</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.scrollCont}
          horizontal={true}
        >
          <View style={styles.scrollH}>
            <HistItems label="Janvier" active />
            <HistItems label="Fevrier" />
            <HistItems label="Mars" />
            <HistItems label="Avril" />
            <HistItems label="Mai" />
            <HistItems label="Juin" />
            <HistItems label="Juillet" />
            <HistItems label="Aout" />
            <HistItems label="Septembre" />
            <HistItems label="Octobre" />
            <HistItems label="Novembre" />
            <HistItems label="Decembre" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.chart}>
        <HistChart />
      </View>
      <View style={styles.txtDps}>
        <Text style={styles.txt1}>Dépenses Avril 2023</Text>
        <Text style={styles.txt2}>Rechargements : 123 790 XOF</Text>
        <Text style={styles.txt3}>Dépenses : 122 300 XOF</Text>
        <Text style={styles.txt4}>Solde initial : 1 530 XOF</Text>
      </View>
      <Text style={styles.txtTransc}>Transactions</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.scrollH}>
          <HistItems label="Tout" active />
          <HistItems label="Dépense" />
          <HistItems label="Rechargement" />
        </View>
      </ScrollView>
      <Text style={styles.Auj}>Aujourd’hui</Text>
      <View style={styles.listTranssc}>
        <HistTrns num={0} />
        <HistTrns num={1} />
        <HistTrns num={3} />
        <HistTrns num={2} />
      </View>
    </ScrollView>
  );
};

export default Historique;

const styles = StyleSheet.create({
  cash: {
    flex: 1,
    flexDirection: "row",
    gap: 35,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cashBtn: {
    flexDirection: "row",
    gap: 5,
  },
  cashTxt: {
    fontSize: 20,
    fontFamily: "Nunito-Bold",
    display: "none",
  },
  cashEye: {
    flexDirection: "row",
  },
  scrollCont: {
    marginBottom: 45,
  },
  scrollH: {
    flexDirection: "row",
    gap: 20,
  },
  chart: {
    alignItems: "center",
  },
  sldTxt: {
    fontFamily: "Nunito-SemiBold",
    color: "#828282",
    marginTop: 36,
    textAlign: "center",
  },
  histTxt: {
    fontFamily: "Nunito-Bold",
    fontSize: 25,
    textAlign: "left",
    maxWidth: 193,
    alignItems: "center",
    marginTop: 60,
    marginBottom: 29,
    marginHorizontal: 39,
  },
  txtDps: {
    marginTop: 45,
    marginHorizontal: 39,
    gap: 13,
  },
  txt1: {
    fontFamily: "Nunito-Bold",
    fontSize: 19,
  },
  txt2: {
    fontFamily: "Nunito-SemiBold",
  },
  txt3: {
    fontFamily: "Nunito-SemiBold",
  },
  txt4: {
    fontFamily: "Nunito-Bold",
  },
  txtTransc: {
    marginTop: 51,
    marginHorizontal: 39,
    fontFamily: "Nunito-Regular",
    color: "#4F4F4F",
    marginBottom: 27,
  },
  Auj: {
    fontFamily: "Nunito-Regular",
    marginHorizontal: 39,
    color: "#4F4F4F",
    marginTop: 30,
  },
  listTranssc: {
    gap: 30,
    marginVertical: 25,
  },
});
