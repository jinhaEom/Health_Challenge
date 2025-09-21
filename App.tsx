import Navigation from "./src/navigation/Navigation";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );

}

export default App;
