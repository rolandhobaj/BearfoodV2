import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-clipboard/clipboard';
import { Button } from 'react-native-elements';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const ModifyRecipeModal: React.FC<ModalProps> = ({ visible, onClose }) => {
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [hasNameError, setHasNameError] = useState(false);
  const [hasTagsError, setHasTagsError] = useState(false);
  const [hasImageUrl, setHasImageUrl] = useState(false);

  const handleSave = () => {
    if (name !== '' && tags !== '' && imageUrl != ''){
      handleClose()
    }

    setHasNameError(name === '');
    setHasTagsError(tags === '');
    setHasImageUrl(imageUrl === '');
  };

  const handleClose = () => {
    setName('');
    setTags('');
    setImageUrl('');
    onClose();
  }


  const fetchCopiedImage = async () => {
    const text = await Clipboard.getImage();
    setImageUrl(text);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Recept hozzáadása</Text>
          <Text style={styles.label}>Név</Text>
          <TextInput
            style={hasNameError ? styles.inputError : styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Név megadása..."
          />
          <Text style={styles.label}>Cimkék</Text>
          <TextInput
            style={hasTagsError ? styles.inputError : styles.input}
            value={tags}
            onChangeText={setTags}
            placeholder="Cimke megadása..."
          />
          <Text style={styles.label}>Kép URL</Text>
          <TextInput
            style={hasTagsError ? styles.inputError : styles.input}
            value={imageUrl}
            onChangeText={setImageUrl}
            placeholder="URL megadása..."
          />
          <TouchableOpacity style={styles.button} onPress={fetchCopiedImage}>
              <Text style={styles.buttonText}>Kép beillesztése a vágólapról</Text>
          </TouchableOpacity>
          {imageUrl !== '' ? 
                <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200, marginTop: 10, alignSelf: 'center' }}/>: null} 
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, marginBottom: 20 }}>
          <TouchableOpacity onPress={handleClose}>
            <Icon name='close' color='red' size={60} style={{marginLeft: 10}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClose}>
            <Icon name='trash-o' color='grey' size={60} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave}>
            <Icon name='check' color='green' size={60} style={{marginRight: 10}}/>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  imageLabel: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 200, 
    height: 200, 
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 1, borderColor: 'black'
  },
  button: {
    backgroundColor: '#4E787D',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ModifyRecipeModal;