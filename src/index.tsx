import React, { useEffect } from 'react';
import { NativeModules } from 'react-native';

const { KeepAwake: KeepAwakeModule } = NativeModules;

/**
 * Activates keep awake. Stopping the screen from going to sleep!
 * **note** is not reference counted like the KeepAwake class
 * @export
 */
export function activate(): void {
  if (KeepAwakeModule?.activate) KeepAwakeModule.activate();
}

/**
 * deactivates keep awake. allowing the screen from going to sleep!
 * **note** is not reference counted like the KeepAwake class
 * @export
 */
export function deactivate(): void {
  if (KeepAwakeModule?.deactivate) KeepAwakeModule.deactivate();
}

/**
 * keep awake hook. on mount will keep the screen from going to sleep,
 * and on unmount will deactivate allowing the screen to go to sleep
 * **note** is not reference counted like the KeepAwake class
 * @export
 */

export function useKeepAwake(): void {
  useEffect(() => {
    activate();
    return () => deactivate();
  }, []);
}

/**
 * A react class component that will keep the screen from going to sleep
 * when react mounts the component,
 * and when react unmount the component it will deactivate, allowing the screen to go to sleep
 *
 * **note** KeepAwake **is** reference counted based on the number of KeepAwake classes mounted
 * and will only deactivate on the last unmounted Keep Awake react component
 * @export
 * @class KeepAwake
 * @extends {React.PureComponent}
 */
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
