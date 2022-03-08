import React from 'react';
import {View, Text} from 'react-native';
import {TextButton} from '../components';

const Exchange = ({navigation}) => {
  return (
    <View>
      <TextButton label="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Exchange;
