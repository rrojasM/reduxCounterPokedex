import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/app/store';
import ButtonRedux from './src/components/ButtonRedux';
import Counter from './src/components/Counter';
import PokemonList from './src/components/PokemonList';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <Provider store={store}>
      <View>
        {/* <Counter />
        <ButtonRedux /> */}

        <PokemonList />
      </View>
    </Provider>

  );
};

const styles = StyleSheet.create({

});

export default App;
