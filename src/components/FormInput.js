import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {SIZES, COLORS} from '../constants';

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  placeholder,
  inputStyle,
  value = '',
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  maxLength,
}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}>
      <View
        style={[
          styles.shadowProp,
          {
            flexDirection: 'row',
            height: 60,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.height > 800 ? SIZES.base : 0,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...inputContainerStyle,
          },
        ]}>
        {prependComponent}
        <TextInput
          style={{flex: 1, ...inputStyle}}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCompleteType={autoCompleteType}
          maxLength={maxLength}
          onChangeText={text => onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: COLORS.secondary,
    shadowOffset: {width: -2, height: -5},
    shadowRadius: 10,
    shadowOpacity: 0.2,
    elevation: 8,
  },
});
