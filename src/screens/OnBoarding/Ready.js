import React from 'react';
import {View, Text, ImageBackground, Image, StatusBar} from 'react-native';
import TextButton from '../../components/TextButton';
import {images, FONTS, SIZES, COLORS} from '../../constants';

const Ready = ({navigation}) => {
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
        {/* background image */}
        <View
          style={{
            bottom: 20,
          }}>
          <Image
            source={images.ready}
            resizeMode="contain"
            style={{
              height: 280,
              width: 273,
            }}
          />
        </View>
        <Text style={{...FONTS.h1, color: COLORS.white}}>
          You are ready to go!
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body3,
            color: COLORS.white,
          }}>
          Thanks for taking your time to{'\n'}create an account with us. Now
          this{'\n'}is the fun part. Let's explore the{'\n'}app.
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
          top: 220,
        }}>
        <TextButton
          label="Get Started!"
          buttonContainerStyle={{
            height: 56,
            width: 250,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{color: COLORS.primary}}
          onPress={() => navigation.navigate('MainLayout')}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#F7CED7" />
      {/* background color image */}
      <ImageBackground
        source={images.bgReady}
        style={{
          // flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '100%',
          width: '100%',
        }}>
        {/* body section */}
        {renderBodySection()}

        {/* Bottom section */}
        {renderBottomSection()}
      </ImageBackground>
    </View>
  );
};

export default Ready;
