import { NativeModules } from 'react-native';

type KeepAwakeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { KeepAwake } = NativeModules;

export default KeepAwake as KeepAwakeType;
