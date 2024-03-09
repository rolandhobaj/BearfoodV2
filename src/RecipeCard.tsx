import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from "@rneui/themed";

interface CardProps {
  title: string;
}

const RecipeCard: React.FC<CardProps> = ({ title }) => {
  return (
    <Card>
      <Card.Image 
       source={{ uri: "https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg" }}
       style={styles.cardImage} />
      <Card.Title >{title}</Card.Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    height: 200, // Adjust the height as needed
  },
});

export default RecipeCard;