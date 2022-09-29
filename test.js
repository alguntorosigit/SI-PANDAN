import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <ScrollView>
      <Text>HALLOO</Text>
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View>
        <Text 
        >LOGIN</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200}}
        />    
      </View>
      <Text> KABBOOM</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'blue',
          borderWidth: 1
        }}
        defaultValue="Tulis Saya"
      />
    </ScrollView>
  );
}

export default App;