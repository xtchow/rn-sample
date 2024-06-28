import { StyleSheet, View } from 'react-native';
import { EquipView } from './components/Equipment/EquipView';

export default function App() {
  return (
    <View style={styles.container}>

      <EquipView />

      {/* <StatusBar style="auto" /> */}
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
});
