import { StatusBar } from 'expo-status-bar';
import { Button, Switch, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Appbar, RadioButton } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState('first');
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Appbar.Header style={styles.item}>
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={() => { console.log("Search Pressed") }} />
        <Appbar.Action icon="home" onPress={() => { console.log("Home Pressed") }} />
      </Appbar.Header>
      <View style={styles.container}>
        <Text style={styles.mainHeading}>Hello</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'stretch', marginLeft: 20 }}>
          <FontAwesome style={{ margin: 10 }} name='book' size={25} />
          <FontAwesome style={{ margin: 10 }} name='camera' size={25} />
        </View>
        <View style={{ margin: 35, flexDirection: 'row' }}>
          <View style={[{ width: "48%", margin: 10, backgroundColor: "red" }]}>
            <Button
              onPress={this.buttonClickListener}
              title="NEXT"
              color="#FFFFFF"
            />
          </View>
          <View style={[{ width: "48%", margin: 10, backgroundColor: "red" }]}>
            <Button
              onPress={this.buttonClickListener}
              title="NEXT"
            />
          </View>
        </View>
        {/* toggle Button */}
        <Switch
          style={{ alignSelf: 'stretch', justifyContent: 'flex-end', margin: 10 }}
          trackColor={{ false: 'red', true: 'lightblue' }}
          thumbColor={false ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={console.log("Toggle")}
          value={true}
        />

        {/* radio button */}
        <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'flex-end', margin: 10 }}>
          <RadioButton
            color='lightblue'
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <RadioButton
            color='lightblue'
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>
      </View>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: "lightblue"
  },
  mainHeading: {
    fontSize: 35,
  },
  button1: {
    backgroundColor: 'white',
    color: 'blue'
  }
});
