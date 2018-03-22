import React from 'react';
import { StyleSheet, Text,Image,Button, View } from 'react-native';
import { DrawerNavigator,StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';


const DrawerExample = DrawerNavigator(
  {
      First: {
         // path: '/',
          screen: FirstScreen,
      },
      Second: {
        //  path: '/sent',
          screen: SecondScreen,
      },
  },
  {
      initialRouteName: 'First',
      drawerPosition: 'left',
      // drawerWidth: 200,
      contentOptions: {
          activeTintColor: 'red',
      }
  }
);

export default DrawerExample;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Drawer App</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
