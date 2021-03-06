import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { KeepAwake } from '@unsw-gsbme/react-native-keep-awake';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Screen will never sleep :)</Text>
      <KeepAwake />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
