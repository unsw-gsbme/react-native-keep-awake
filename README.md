# react-native-keep-awake

React Native module for keeping the phone screen alive

based on the work from
https://github.com/corbt/react-native-keep-awake

## Installation

```sh
npm install @unsw-gsbme/react-native-keep-awake
```

```sh
yarn install @unsw-gsbme/react-native-keep-awake
```

## Usage

### Class Component style

```js
import { useKeepAwake } from '@unsw-gsbme/react-native-keep-awake';

// ...

export default function App() {
  useKeepAwake();
  return (
    <View style={styles.container}>
      <Text>Screen will never sleep :)</Text>
    </View>
  );
}
```

### hooks style

```js
import { KeepAwak } from '@unsw-gsbme/react-native-keep-awake';

// ...

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Screen will never sleep :)</Text>
      <KeepAwake />
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
