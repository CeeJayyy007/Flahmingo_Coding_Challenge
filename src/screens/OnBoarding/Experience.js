import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import {View, Text} from 'react-native';
import {TextButton, Header, IconButton} from '../../components';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Experience = ({navigation}) => {
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
            color: COLORS.secondary,
            paddingBottom: SIZES.radius,
          }}>
          STEP 1/7
        </Text>
        <Text
          style={{...FONTS.h2, color: COLORS.textLarge, textAlign: 'center'}}>
          What is your current{'\n'}Experience level?
        </Text>
        {/* Experience slider */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding * 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <Text
          style={{...FONTS.h4, color: COLORS.textLarge, textAlign: 'center'}}>
          Moderate Intensity
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body4,
            color: COLORS.text,
          }}>
          I always invest regularly two or{'\n'}three times a week
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
          label="Select"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Notification')}
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

export default Experience;
