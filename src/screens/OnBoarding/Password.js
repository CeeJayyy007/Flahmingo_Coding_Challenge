import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  TextButton,
  Header,
  IconButton,
  FormInput,
  ProgressBar,
} from '../../components';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Password = ({navigation}) => {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState({
    hasSpecialChar: false,
    hasCap: false,
    hasNumber: false,
    has8digit: false,
  });

  const [message, setMessage] = useState({
    hasSymbol: '',
    hasUpperCase: '',
    hasNum: '',
    has8char: '',
  });

  const strength = Object.values(validate).reduce((a, item) => a + item, 0);

  const validateMessage = Object.values(message);

  const validatePassword = password => {
    if (password.match(/\d+/g)) {
      setValidate(o => ({...o, hasNumber: true}));
      setMessage(o => ({...o, hasNum: '* 1 number       '}));
    } else {
      setValidate(o => ({...o, hasNumber: false, hasNum: ''}));
      setMessage(o => ({...o, hasNum: ''}));
    }

    if (password.match(/[A-Z]+/g)) {
      setValidate(o => ({...o, hasCap: true}));
      setMessage(o => ({...o, hasUpperCase: '* 1 upper case        '}));
    } else {
      setValidate(o => ({...o, hasCap: false, hasUpperCase: ''}));
      setMessage(o => ({...o, hasUpperCase: ''}));
    }

    if (password.match(/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/)) {
      setValidate(o => ({...o, hasSpecialChar: true}));
      setMessage(o => ({...o, hasSymbol: '* 1 symbol         '}));
    } else {
      setValidate(o => ({...o, hasSpecialChar: false}));
      setMessage(o => ({...o, hasSymbol: ''}));
    }

    if (password.length > 7) {
      setValidate(o => ({...o, has8digit: true}));
      setMessage(o => ({...o, has8char: '* 8+ char       '}));
    } else {
      setValidate(o => ({...o, has8digit: false, has8char: ''}));
      setMessage(o => ({...o, has8char: ''}));
    }
  };

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
          Set your password
        </Text>
        <FormInput
          value={password}
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
            width: 300,
            height: 60,
          }}
          inputStyle={{
            textAlign: 'center',
            ...FONTS.h1,
          }}
          onChange={value => {
            validatePassword(value);
            setPassword(value);
          }}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                height: 60,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: COLORS.lightGray3,
                }}
              />
            </TouchableOpacity>
          }
        />
      </View>
    );
  }

  function renderValidationIndicators() {
    return (
      <View
        style={{
          top: 190,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View
          flexDirection="row"
          style={{alignItems: 'center', justifyContent: 'flex-start'}}>
          <ProgressBar
            barStyle={{
              marginRight: SIZES.base,
              backgroundColor: strength > 0 ? COLORS.secondary : COLORS.otp,
            }}
          />
          <ProgressBar
            barStyle={{
              marginRight: SIZES.base,
              backgroundColor: strength > 1 ? COLORS.secondary : COLORS.otp,
            }}
          />
          <ProgressBar
            barStyle={{
              marginRight: SIZES.base,
              backgroundColor: strength > 2 ? COLORS.secondary : COLORS.otp,
            }}
          />
          <ProgressBar
            barStyle={{
              marginRight: SIZES.base,
              backgroundColor: strength > 3 ? COLORS.secondary : COLORS.otp,
            }}
          />
        </View>
        <View
          style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding * 2,
          }}>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.text,
            }}>
            {validateMessage}
          </Text>
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
          onPress={() => navigation.navigate('Fingerprint')}
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

        {/* validation indicators */}
        {renderValidationIndicators()}

        {/* Bottom section */}
        {renderBottomSection()}
      </OnBoardingLayout>
    </View>
  );
};

export default Password;
