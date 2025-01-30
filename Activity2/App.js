import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Name: ');
  const [number, onChangeNumber] = React.useState('');
  const [text1, onChangeText1] = React.useState('Address: ');
  const [text2, onChangeText2] = React.useState('School: ');
  const [text3, onChangeText3] = React.useState('Course: ');
  const [text4, onChangeText4] = React.useState('Email: ');
  const [text5, onChangeText5] = React.useState('Contact No: ');
  const [value, onChangeText6] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="AGE: "
          keyboardType="numeric"
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={text1}
          placeholder="Address: "
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={text2}
          placeholder="School: "
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText3}
          value={text3}
          placeholder="Course: "
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText4}
          value={text4}
          placeholder="Email: "
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText5}
          value={text5}
          placeholder="Contact No: "
          keyboardType="numeric"
        />
          <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText6(text)}
          value={value}
          style={styles.textInput, {
    margin: 12,
    borderWidth: 1,
    padding: 10, borderColor: 'blue'}}
        />




      </SafeAreaView>
    </SafeAreaProvider>
    
  );
  
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
});

export default TextInputExample;