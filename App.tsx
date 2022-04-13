import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/app/store';
import ButtonRedux from './src/components/ButtonRedux';
import Counter from './src/components/Counter';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter />

        <ButtonRedux />
      </SafeAreaView>
    </Provider>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
