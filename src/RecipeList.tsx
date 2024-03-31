import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { CardItem } from './CardItem';
import RecipeCard from './RecipeCard';
import SearchableDropdown from 'react-native-searchable-dropdown';

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
  {
    id: 0,
    name: 'Minden',
  },
  {
    id: 1,
    name: 'Leves',
  },
  {
    id: 2,
    name: 'Főétel',
  },
  {
    id: 3,
    name: 'Regnyuzsi',
  },
  {
    id: 4,
    name: 'Köret',
  },
  {
    id: 5,
    name: 'Desszert',
  },
];

const RecipeList: React.FC<CardListProps> = ({ recipes }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredRecipes = recipes.filter(recipe => {
    let title = removeHungarianAccents(recipe.title);
    console.log(title);
    return title.toLowerCase().includes(removeHungarianAccents(searchQuery.toLowerCase()))
  });

  return (
    <View>
      <SearchableDropdown
        onTextChange={(text: string) => setSearchQuery(text)}
        onItemSelect={(item: { id: number, name: string }) => setSearchQuery(item.name)}
        containerStyle={{ padding: 5 }}
        textInputStyle={{ padding: 12, backgroundColor: 'white', color: 'black' }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: 'rgba(18,57,6,0.35)',
          borderColor: '#bbb',
          borderWidth: 1,
          borderRadius: 5,
        }}
        itemTextStyle={{ color: 'white' }}
        itemsContainerStyle={{ maxHeight: 100 }}
        items={dropdownItems}
        placeholder="Search..."
        resetValue={false}
      />
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