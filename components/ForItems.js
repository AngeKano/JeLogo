import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";
import Data from "./Data";

const Test = Data.Test;

function Rc (donne) {
  console.log("Nous sommes dans la Bouclecas");
  console.log(donne);

  const Dta = [{mon :1},{mon :66}];

  <FlatList
    data={Dta}
    renderItem={({ item }) => (
      <>
        <Text>azerty</Text>
      </>
    )}
  />}
  //   var size = Object.keys(donne.donne).length
  //   console.log(size);

  //   <FlatList
  //     data={donne}
  //     renderItem={({ item }) => {<Text>sdsd</Text>}
  //       // {
  //       //   console.log("Nous sommes dans la Boucle");
  //       //   let objectLength = 0;

  //       //   for (let key in donne.donne) {
  //       //     objectLength++;
  //       //     console.log(objectLength);
  //       //   }
  //       //   if (objectLength == 1) {
  //       //     return (
  //       //       <FlatList
  //       //         data={donne.donne}
  //       //         renderItem={({ item }) => (
  //       //           <Text style={{ color: "blue" }}>{item.nom}</Text>
  //       //         )}
  //       //       />
  //       //     );
  //       //   } else
  //       //     return (
  //       //       <FlatList
  //       //         data={donne.donne}
  //       //         renderItem={({ item }) => (
  //       //           <>
  //       //             <Text style={{ color: "red" }}>{item.nom}</Text>
  //       //             <Rc donne={item.enfant} />
  //       //           </>
  //       //         )}
  //       //       />
  //       //     );
  //       // }
  //     }
  //   />;


const ForItems = () => {
  return <Rc donne={Test} />;
};

// Test.length == 1 ? return (<Text></Text>) : return (<Text>Texst 1</Text>)

//   return (
//     <View>
//         <Text> sgdshd</Text>
//       <FlatList
//         data={props.data}
//         renderItem={({ item }) => (
//             <View>
//                 {<ForItems />}
//             </View>
//         )}
//       />
//     </View>
//   );

export default ForItems;

const styles = StyleSheet.create({});
