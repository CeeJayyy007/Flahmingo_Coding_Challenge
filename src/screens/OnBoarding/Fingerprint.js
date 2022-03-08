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

const Fingerprint = ({navigation}) => {
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
            label="Skip"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{color: COLORS.primary}}
            onPress={() => navigation.navigate('Profile')}
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
        {/* background image */}
        <View
          style={{
            top: -20,
          }}>
          <Image
            source={images.fingerprint}
            resizeMode="contain"
            style={{
              height: 216.69,
              width: 219,
            }}
          />
        </View>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body4,
            color: COLORS.secondary,
            paddingBottom: SIZES.radius,
          }}>
          STEP 1/7
        </Text>
        <Text
          style={{...FONTS.h2, color: COLORS.textLarge, textAlign: 'center'}}>
          Enable Fingerprint
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body3,
            color: COLORS.text,
          }}>
          If you enable touch ID, you don’t {'\n'}need to enter your password
          when {'\n'}you login.
        </Text>
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
          label="Activate"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Profile')}
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

export default Fingerprint;
