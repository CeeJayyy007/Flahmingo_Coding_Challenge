import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextButton, Header, IconButton, FormInput} from '../../components';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {utils} from '../../utils';
import OnBoardingLayout from './OnBoardingLayout';

const Password = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');

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
            ...FONTS.h2,
          }}
          // placeholder="Enter Password"
          // placeholderTextColor={COLORS.text}
          onChange={value => {
            utils.validatePassword(value, setPasswordError);
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
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding * 2,
          }}>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.text,
            }}>
            * 8+ Characters
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.text,
            }}>
            * 8+ Characters
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',

            marginTop: SIZES.padding,
          }}>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.text,
            }}>
            * 8+ Characters
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.text,
            }}>
            * 8+ Characters
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

        {/* Bottom section */}
        {renderBottomSection()}
      </OnBoardingLayout>
    </View>
  );
};

export default Password;
