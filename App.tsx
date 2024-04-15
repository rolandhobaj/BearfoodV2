import React from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';

import RecipeList from './src/RecipeList';
import { CardItem } from './src/CardItem';

function App(): React.JSX.Element {

  const recipes: CardItem[] = [
    {id : "13", title: "Pityoklé", tags: ["Leves"]},
    {id : "14", title: "Sűrű", tags: ["Főétel"]},
    {id : "15", title: "CukrosPityóka", tags: ["Desszert"]},
  ] ;

  return (
      <ImageBackground source={require('./resources/bg.png')} resizeMode="cover" style={styles.image}>
        <RecipeList recipes={recipes}/>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  }
});


export default App;
