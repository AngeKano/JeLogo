import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import HistItems from "../components/HistItems";
import HistChart from "../components/HistChart";
import HistTrns from "../components/HistTrns";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView } from "react-native-gesture-handler";
import ShowCash from "../components/ShowCash";

SplashScreen.preventAutoHideAsync();

const Historique = ({ navigation: { navigate } }) => {
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
    <View onLayout={onLayoutRootView} style={styles.container}>
      <View style={styles.Solde}>
        <ShowCash />
      </View>

      <View style={styles.Ctn}>
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
      </View>
    </View>
  );
};

export default Historique;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0372C1",
  },
  Solde: {
    flex: 1,
  },
  Ctn: {
    flex: 3,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
    color: "white",
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
