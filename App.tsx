import { View } from 'react-native';
import { Home } from './components/Home';
import { master } from './master';

export default function App() {
  return (
    <View style={master.container}>

      <Home />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
