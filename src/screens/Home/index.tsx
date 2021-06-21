import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  Alert
} from 'react-native';
import { styles } from './styles';
import { MyOnix } from '../../assets/MyOnix';

import { errors } from '../../utils/codes';

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<string>();

  function handleSearch() {
    if(!searchTerm) {
      return
    }

    Keyboard.dismiss()

    const error = errors.find(({ error }) => {
      return error.code === searchTerm
    })?.error.message

    if(!error) {
      Alert.alert("Código não encontrado")
      setSearchTerm("")
    } 
    setSearchResult(error)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.header}>
              <MyOnix
                width="350"
                height="120"
              />
            </View>

            <View style={styles.content}>
              <TextInput
                placeholder="Código do erro"
                placeholderTextColor="#7B7B7B"
                keyboardType="numeric"
                style={styles.textInput}
                autoCompleteType="off"
                onChangeText={setSearchTerm}
                value={searchTerm}
              />
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => handleSearch()}
                disabled={!searchTerm}
              >
                <Text style={styles.textButton}>
                  Pesquisar
              </Text>
              </TouchableOpacity>

              <View style={styles.line} />
              <View 
              style={styles.box}
              >
                <Text style={styles.textBox}>
                  {searchResult || `Informe o código do erro no campo acima.`}
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}