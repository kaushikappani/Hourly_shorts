import React, { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Tabs from './components/Tabs';
import Context, { NewsContext } from './context';



function App() {
  const { darkTheme } = useContext(NewsContext)
  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme ? "#282C35" : "white" }}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  )
}