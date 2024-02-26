import React, { useState } from 'react';
import { StyleSheet, Image, Button, Alert, ScrollView, Pressable, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';

const TextInputNumber = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Initial Value"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const CounterApp = (props: { initialValue: number;}) => {
  const [count, setCount] = useState(props.initialValue);
  const increment = () => {
    setCount(count + 1);
  }
  return (
    <View>
        <TextInputNumber/>
        <Pressable style={styles.pressable} onPress={increment}>
          <Text style={styles.pressableText}>Increment using Pressable</Text>
        </Pressable>
        <Button title='Increment using Button' onPress={increment} />
        <Text>counter : {count}</Text>
    </View>
  )
}

export default function TabTwoScreen() {
  const _onPressButton = () => {
    Alert.alert('You tapped the button!');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Tab Two</Text>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: 400, height: 400 }} />
          <Image source={require('../../assets/images/favicon.png')} />
          <View style={styles.buttonContainer}>
            <Button onPress={_onPressButton} title="Press Me" />
          </View>
          <CounterApp initialValue={100}/>
          <View style={styles.buttonContainer}>
            <Button onPress={_onPressButton} title="Press Me" color="#841584" />
          </View>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button onPress={_onPressButton} title="This looks great!" />
            <Button onPress={_onPressButton} title="OK!" color="#841584" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  pressable: {
    paddingVertical: 10,
    borderBottomWidth: 10,
    backgroundColor: "#841584",
  },
  pressableText: {
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white"
  }
});
