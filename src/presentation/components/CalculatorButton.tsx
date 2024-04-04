import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, globalStyles } from '../../config/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize= false,
  blackText= false,
  onPress,
} : Props) => {
  return (
    <Pressable
      onPress={ () => onPress() }
      style={ ({pressed}) => ({
       ...globalStyles.button,
        width: ( doubleSize ) ? 180 : 80,
        backgroundColor: color,
        opacity: ( pressed ) ? 0.8 : 1,
    }) }>
      <Text style={{
        ...globalStyles.buttonText,
        color: ( blackText ) ? 'black' : 'white',
      }}>{ label }</Text>
    </Pressable>
  );
};

export default CalculatorButton;
