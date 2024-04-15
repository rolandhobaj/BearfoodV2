import React, { useState, useEffect } from 'react';
import { TextInput, View, FlatList, Text, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';

interface AutoFillTextBoxProps {
  options: string[];
  onOptionSelected: (option: string) => void;
}

const AutoFillTextBox: React.FC<AutoFillTextBoxProps> = ({ options, onOptionSelected }) => {
  const [text, setText] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    // Show options when input text is not empty
    setShowOptions(!!inputText);
  };
  
  const handleOptionSelect = (option: string) => {
    setText(option);
    setShowOptions(false);
    onOptionSelected(option);
    Keyboard.dismiss();
  };

  const handleClearText = () => {
    setText('');
    setShowOptions(false);
  };

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('Keyboard hidden');
        console.log(text);
        // Do something when the keyboard is hidden
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);
  
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
            value={text}
            onChangeText={handleTextChange}
            style={styles.text}
            placeholder="Szűrj kategóriára.."
        />
        {text !== '' && (
          <TouchableOpacity style={{ position: 'absolute', right: '5%' }} onPress={handleClearText}>
            <Text style={{ fontSize:22, fontWeight:'bold', marginTop:6 }}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      {showOptions && (
        <FlatList
          data={options.filter(option => option.toLowerCase().includes(text.toLowerCase()))}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleOptionSelect(item)} onFocus={() => console.log("OnFocus" + item)}>
              <Text style={styles.listText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
      marginTop:15,
      marginLeft:10,
      marginRight:10,
      color:'black',
      backgroundColor: 'white',
      fontSize: 20,
      flex:1,
      paddingLeft:14
    },
    listText: {
        backgroundColor: 'white',
        marginLeft:10,
        marginRight:10,
        color:'black',
        borderBottomWidth:2,
        paddingLeft:14,
        fontSize: 20
      }
  });

export default AutoFillTextBox;