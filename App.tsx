import React from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';

import RecipeList from './src/RecipeList';
import { CardItem } from './src/CardItem';

function App(): React.JSX.Element {

  const recipes: CardItem[] = [
    {id : "13", title: "Leves"},
    {id : "14", title: "Főétel"},
    {id : "15", title: "Leves1"},
    {id : "16", title: "Főétel2"},
    {id : "17", title: "Leves3"},
    {id : "18", title: "Főétel4"},
    {id : "19", title: "Leves3"},
    {id : "181", title: "Főétel5"},
    {id : "172", title: "Leves4"},
    {id : "183", title: "Főétel6"},
    {id : "159", title: "Desszert"}
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
