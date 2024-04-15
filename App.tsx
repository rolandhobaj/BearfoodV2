import React from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';

import RecipeList from './src/RecipeList';
import { CardItem } from './src/CardItem';

function App(): React.JSX.Element {

  const recipes: CardItem[] = [
    {id : "13", title: "Pityoklé", tags: ["Leves"], imageUri: "https://promova.com/content/fast_food_names_d368a9810d.png"},
    {id : "14", title: "Sűrű", tags: ["Főétel"], imageUri: "https://promova.com/content/fast_food_names_d368a9810d.png"},
    {id : "15", title: "CukrosPityóka", tags: ["Desszert"], imageUri: "https://promova.com/content/fast_food_names_d368a9810d.png"},
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
