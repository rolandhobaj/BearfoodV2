import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import RecipeCard from './src/RecipeCard';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <RecipeCard title='This is a recipe'/>
      <RecipeCard title='This is a recipe'/>
      <RecipeCard title='This is a recipe'/>
    </SafeAreaView>
  );
}

export default App;
