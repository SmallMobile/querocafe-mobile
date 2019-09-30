import React from 'react';
import { View, Text } from 'react-native';

export default function Dashboard() {
    return (
        <View>
            <Text>Página dashboard</Text>
        </View>
    );
}

// import React from "react";
// import { View, Button, Text } from "react-native";
// // import { Card, Button, Text } from "react-native-elements";
// import { onSignOut } from "../../services/auth";

// export default ({ navigation }) => (
//   <View style={{ paddingVertical: 20 }}>
//     <View title="John Doe">
//       <View
//         style={{
//           backgroundColor: "#bcbec1",
//           alignItems: "center",
//           justifyContent: "center",
//           width: 80,
//           height: 80,
//           borderRadius: 40,
//           alignSelf: "center",
//           marginBottom: 20
//         }}
//       >
//         <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
//       </View>
//       <Button
//         backgroundColor="#03A9F4"
//         title="Sair"
//         onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
//       />
//     </View>
//   </View>
// );