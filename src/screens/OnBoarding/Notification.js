import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  TextButton,
  Header,
  IconButton,
  NotificationCard,
} from '../../components';
import {images, FONTS, SIZES, COLORS, icons, constants} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Notification = ({navigation}) => {
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
            onPress={() => navigation.navigate('Investment')}
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
          Do you want to turn{'\n'}on notification?
        </Text>
        {/* background image */}
        <View
          style={{
            top: 20,
            paddingBottom: SIZES.padding,
          }}>
          <Image
            source={images.notification}
            resizeMode="contain"
            style={{
              height: 211,
              width: 210,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: SIZES.padding,
          }}>
          {constants.notifications.map((item, index) => {
            return <NotificationCard key={item.id} item={item} />;
          })}
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
          top: 260,
        }}>
        <TextButton
          label="Allow"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Investment')}
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

export default Notification;
