import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  StyleSheet,
  TextInput,
} from 'react-native';
import {TextButton, Header, IconButton} from '../../components';
import {images, FONTS, SIZES, COLORS, icons} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Verify = ({navigation}) => {
  function renderHeaderSection() {
    return (
      <Header
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.radius,
          marginTop: 10,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: SIZES.radius,
            }}
            iconStyle={{
              width: 24,
              height: 24,
              tintColor: COLORS.textLarge,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <TextButton
            label="Next"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{color: COLORS.primary}}
            onPress={() => navigation.navigate('Password')}
          />
        }
      />
    );
  }

  function renderBodySection() {
    return (
      <View
        style={{
          top: 80,
          flex: 1,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body4,
            color: COLORS.primary,
            paddingBottom: SIZES.radius,
          }}>
          STEP 1/7
        </Text>
        <Text
          style={{...FONTS.h2, color: COLORS.textLarge, textAlign: 'center'}}>
          Let’s start with your {'\n'} mobile number
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body3,
            color: COLORS.text,
          }}>
          Number we can use to reach you
        </Text>
        <View
          style={{
            marginTop: 20,
            borderColor: COLORS.lightGray3,
          }}>
          <TextInput
            placeholder="Text Input"
            keyboardType="number-pad"
            style={{
              color: COLORS.textLarge,
              minHeight: 50,
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 10,
              height: 60,
              width: 283,
              borderRadius: 16,
              backgroundColor: COLORS.white,
              ...FONTS.body3,
            }}
          />
        </View>
      </View>
    );
  }

  function renderBottomSection() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          top: 160,
        }}>
        <TextButton
          label="Verify Now"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Confirm')}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <OnBoardingLayout>
        {/* header section */}
        {renderHeaderSection()}

        {/* body section */}
        {renderBodySection()}

        {/* Bottom section */}
        {renderBottomSection()}
      </OnBoardingLayout>
    </View>
  );
};

export default Verify;
