import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const ModifyRecipeModal: React.FC<ModalProps> = ({ visible, onClose }) => {
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [hasNameError, setHasNameError] = useState(false);
  const [hasTagsError, setHasTagsError] = useState(false);

  const handleSave = () => {
    if (name !== '' && tags !== ''){
      onClose()
    }

    setHasNameError(name === '');
    setHasTagsError(tags === '');
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, marginBottom: 20 }}>
          <TouchableOpacity onPress={onClose}>
            <Icon name='close' color='red' size={60} style={{marginLeft: 10}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
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
});

export default ModifyRecipeModal;