import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TextButton from '../../components/TextButton';
import {images, FONTS, SIZES, COLORS} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Welcome = ({navigation}) => {
  function renderHeaderLogo() {
    return (
      <View
        style={{
          top: 29.6,
          position: 'absolute',
          alignItems: 'center',
          justifyContents: 'center',
        }}>
        <Image
          source={images.logo_02}
          resize_mode="contain"
          style={{
            width: 61.89,
            height: 33.5,
          }}
        />
      </View>
    );
  }

  function renderBodySection() {
    return (
      <View
        style={{
          top: 100,
          flex: 1,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h1, color: COLORS.textLarge}}>Welcome to</Text>
        <Text style={{...FONTS.h1, color: COLORS.secondary}}>Flahmingo</Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body3,
            color: COLORS.text,
          }}>
          The best UI Kit for your next {'\n'}health and fitness project!
        </Text>
        {/* background image */}
        <View
          style={{
            bottom: 210,
          }}>
          <Image
            source={images.welcome}
            resizeMode="contain"
            style={{
              height: SIZES.height,
              width: SIZES.width,
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
          top: 280,
        }}>
        <TextButton
          label="Get Started"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Verify')}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.radius,
          }}>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.body3,
              color: COLORS.text,
            }}>
            Already have an account?
          </Text>
          <TextButton
            label="Sign In"
            buttonContainerStyle={{
              backgroundColor: null,
              marginLeft: SIZES.base,
            }}
            labelStyle={{
              color: COLORS.secondary,
              ...FONTS.h33,
            }}
            onPress={() => navigation.navigate('MainLayout')}
          />
        </View>
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
        {/* Logo */}
        {renderHeaderLogo()}

        {/* body section */}
        {renderBodySection()}

        {/* Bottom section */}
        {renderBottomSection()}
      </OnBoardingLayout>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  text: {},
});
