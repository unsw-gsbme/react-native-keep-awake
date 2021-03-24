import React, { useState } from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import { Button, Text, View } from 'react-native';

type TestProps = {
  name: string;
};

const Test = ({ name }: TestProps) => {
  const [value, setValue] = useState<string>();
  const onClick = () => setValue(name);
  return (
    <View>
      {value && <Text testID="txt">{name}</Text>}
      <Button testID="btn" title="sample" onPress={onClick} />
    </View>
  );
};

describe('root', () => {
  const name = 'root';
  let renderApi: RenderAPI;
  beforeEach(() => {
    renderApi = render(<Test name={name} />);
  });

  it('renders button and no text', () => {
    expect(renderApi.queryByTestId('txt')).toBeFalsy();
    expect(renderApi.queryByTestId('btn')).toBeTruthy();
  });

  it('shows text when button is pressed', () => {
    fireEvent.press(renderApi.getByTestId('btn'));
    expect(renderApi.queryByTestId('txt')).toBeTruthy();
    expect(renderApi.queryByTestId('txt').props.children).toBe(name);
  });
});
