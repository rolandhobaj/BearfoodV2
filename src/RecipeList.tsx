import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { CardItem } from './CardItem';
import RecipeCard from './RecipeCard';

interface CardListProps {
  recipes: CardItem[];
}

const RecipeList: React.FC<CardListProps> = ({ recipes }) => {
  return (
    <View>
      <FlatList
        data={recipes}
        renderItem={(renderItem) => <RecipeCard title={renderItem.item.title}/>}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default RecipeList;