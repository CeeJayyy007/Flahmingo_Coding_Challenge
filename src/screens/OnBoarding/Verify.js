import React, {useState, useRef} from 'react';
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
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';
import PhoneInput from 'react-native-phone-number-input';

const Verify = ({navigation, route}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const phoneInput = useRef(null);

  // const getPhoneNumber = () => {
  //   setPhoneNumber(phoneNumber);
  // };

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

        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="CA"
          layout="first"
          withShadow
          autoFocus
          containerStyle={styleSheet.phoneNumberView}
          textContainerStyle={styleSheet.phoneNumberTextView}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />
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
          onPress={() => navigation.navigate('Confirm', {phone: phoneNumber})}
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

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  phoneNumberView: {
    width: 283,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 16,
    marginTop: 30,
  },

  phoneNumberTextView: {
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    height: 60,
    paddingVertical: 0,
    backgroundColor: COLORS.white,
  },
});
