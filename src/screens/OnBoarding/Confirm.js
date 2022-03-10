import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import {View, Text} from 'react-native';
import {TextButton, Header, IconButton} from '../../components';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Confirm = ({navigation, route}) => {
  const {phone} = route.params;

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
          Verify your number
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body3,
            color: COLORS.text,
          }}>
          We'll text you on {phone}
        </Text>

        {/* OTP input */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding * 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <OTPInputView
            pinCount={4}
            style={{
              width: '75%',
              height: 20,
            }}
            codeInputFieldStyle={{
              width: 55,
              height: 55,
              borderRadius: 8,
              backgroundColor: COLORS.otp,
              color: COLORS.textLarge,
              ...FONTS.h1,
            }}
            onCodeFilled={code => {
              console.log(code);
            }}
            autoFocusOnLoad
            codeInputHighlightStyle={{borderColor: COLORS.secondary}}
          />
        </View>
        <View
          style={{
            marginTop: 40,
            top: 20,
          }}>
          <TextButton
            label="Send me a new code"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.secondary,
              ...FONTS.h43,
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
          label="Continue"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Password')}
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

export default Confirm;
