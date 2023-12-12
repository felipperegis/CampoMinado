import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Fields from './src/components/Fields';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> iniciando o Mines </Text>
      <Text style={styles.instructions}> Tamanho da grade
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Fields />
        <Fields opened />
        <Fields opened nearMines={1}/>
        <Fields opened nearMines={2}/>
        <Fields opened nearMines={3}/>
        <Fields opened nearMines={4}/>
        <Fields opened nearMines={5}/>
        <Fields opened nearMines={6}/>
        <Fields mined />
        <Fields mined opened/>
        <Fields mined opened exploded/>
        <Fields flagged/>
        <Fields flagged opened/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize:20,
    textAlign: 'center',
    margin: 10,
  }
});
