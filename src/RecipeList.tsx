import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { CardItem } from './CardItem';
import RecipeCard from './RecipeCard';
import AutoFillTextBox from './AutoFillTextbox';

interface CardListProps {
  recipes: CardItem[];
}

function removeHungarianAccents(input: string): string {
  const hungarianAccentsMap: {[key: string]: string} = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ö': 'o', 'ő': 'o', 'ú': 'u', 'ü': 'u', 'ű': 'u',
      'Á': 'A', 'Í': 'I', 'É': 'E', 'Ó': 'O', 'Ö': 'O', 'Ő': 'O', 'Ú': 'U', 'Ü': 'U', 'Ű': 'U'
  };

  let output = '';

  for (const char of input) {
      const replacement = hungarianAccentsMap[char];
      output += replacement !== undefined ? replacement : char;
  }

  return output;
}

var dropdownItems = [
    'Leves',
    'Főétel',
    'Regnyuzsi',
    'Köret',
    'Desszert',
];

const RecipeList: React.FC<CardListProps> = ({ recipes }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredRecipes = recipes.filter(recipe => {
    let title = removeHungarianAccents(recipe.title);
    var searchWord = removeHungarianAccents(searchQuery.toLowerCase());
    if (title.toLowerCase().includes(searchWord)){
      return true;
    }

    return recipe.tags.some(tag => removeHungarianAccents(tag).toLowerCase().includes(searchWord))
  });

  return (
    <View>
      <AutoFillTextBox options={dropdownItems} onOptionSelected={setSearchQuery} />
      <FlatList
        data={filteredRecipes}
        renderItem={(renderItem) => <RecipeCard title={renderItem.item.title}/>}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default RecipeList;