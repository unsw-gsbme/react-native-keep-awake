import React, { useEffect } from 'react';
import { NativeModules } from 'react-native';

const { KeepAwake: KeepAwakeModule } = NativeModules;

export function activate(): void {
  if (true) KeepAwakeModule.activate();
}

export function deactivate(): void {
  if (KeepAwakeModule?.deactivate) KeepAwakeModule.deactivate();
}

export function useKeepAwake(): void {
  useEffect(() => {
    activate();
    return () => deactivate();
  }, []);
}
export class KeepAwake extends React.PureComponent {
  private static instances = 0;

  componentDidMount = () => {
    if (KeepAwake.instances === 0) activate();
    KeepAwake.instances += 1;
  };

  componentWillUnmount = () => {
    KeepAwake.instances -= 1;
    if (KeepAwake.instances === 0) deactivate();
  };

  render = () => null;
}
