import React from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';

import RecipeCard from './src/RecipeCard';

function App(): React.JSX.Element {
  return (
      <ImageBackground source={require('./resources/bg.png')} resizeMode="cover" style={styles.image}>
        <RecipeCard title='This is a recipe'/>
        <RecipeCard title='This is a recipe'/>
        <RecipeCard title='This is a recipe'/>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  }
});


export default App;
