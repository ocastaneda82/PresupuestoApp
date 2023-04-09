import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '@rneui/base';

const Home = () => {
  const [text, setText] = useState('');

  const handleButtonPress = () => {
    console.log('El texto ingresado es:', text);
  };

  return (
    <>
      <Input
        placeholder='Ingresa un texto'
        onChangeText={setText}
        value={text}
      />
      <Button title='Enviar' onPress={handleButtonPress} />
    </>
  );
};

export default Home;
