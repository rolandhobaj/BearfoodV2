import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface RoundButtonProps {
  onPress: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    width: 70,
    height: 70,
    borderRadius: 120,
    backgroundColor: 'rgba(18,57,6, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default RoundButton;