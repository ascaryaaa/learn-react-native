import { StyleSheet, Image, Button,Alert, ScrollView } from 'react-native';
import { Text, View} from '@/components/Themed';
import React, {Component} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class TabTwoScreen extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
              style={{width: 400, height: 400}} />
            <Image source={require('../../assets/images/favicon.png')} />
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPressButton} title="Press Me" />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
                color="#841584"
              />
            </View>
            <View style={styles.alternativeLayoutButtonContainer}>
              <Button onPress={this._onPressButton} title="This looks great!" />
              <Button onPress={this._onPressButton} title="OK!" color="#841584" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
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
});
