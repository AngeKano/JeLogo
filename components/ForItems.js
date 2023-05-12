import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Data from "./Data";

const Test = Data.Test;

const renderItem = (item) => {
  return (
    <>
      <Pressable
        style={{ paddingVertical: 10 }}
        onPress={() => teex(item.enfant)}
      >
        <Text> Parent {item.nom}</Text>
      </Pressable>
      {/* <View>{Rc(item.enfant)}</View> */}
    </>
  );
};

function Rc(donne) {
  console.log("Les données sont : " + donne);

  return (
    <FlatList
      data={donne}
      renderItem={({ item }) =>
        Object.keys(item).length == 2 ? (
          renderItem(item)
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {console.log("Les Items sont : " + Object.keys(item).length)}
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "red",
              }}
            ></View>
            <Text> Enfant {item.nom}</Text>
          </View>
        )
      }
    />
  );
}
function teex(item) {
  console.log(item)
  return (
    <FlatList
    data={item}
    renderItem={({item})=>(
      <View>
        <Text>{item.nom}</Text>
      </View>
    )}
    />
  );
}

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
  const Dta = [{ mon: 1 }, { mon: 66 }];
  return (
    <>
      {Rc(Test)}
      {teex(Test)}
    </>
  );
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

const styles = StyleSheet.create({
  visible: {
    flex: 1,
    display: "flex",
  },
});
