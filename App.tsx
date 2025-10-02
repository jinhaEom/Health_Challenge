import Navigation from './src/navigation/Navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#f9fafb" barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#f9fafb' }}
        edges={['top', 'bottom']}
      >
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
