import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextButton, Header, IconButton, GenderCard} from '../../components';
import {FONTS, SIZES, COLORS, icons, constants} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Gender = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null);
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
          Which one are you?
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: SIZES.padding * 2,
            marginBottom: SIZES.padding,
          }}>
          {constants.gender.map((item, index) => {
            return (
              <GenderCard
                key={item.id}
                item={item}
                selectedCard={selectedCard}
                isSelected={`${selectedCard?.id}` == `${item.id}`}
                onPress={() => setSelectedCard({...item})}
              />
            );
          })}
        </View>

        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body3,
            color: COLORS.text,
          }}>
          To give you a customized experience
          {'\n'} we need to know your gender
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
          top: 230,
        }}>
        <TextButton
          label="Continue"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Experience')}
        />
        <View
          style={{
            top: 20,
          }}>
          <TextButton
            label="Prefer not to choose"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.secondary,
              ...FONTS.h43,
            }}
            onPress={() => navigation.navigate('Experience')}
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
        {/* header section */}
        {renderHeaderSection()}

        {/* body section */}
        {renderBodySection()}

        {/* Gender selector */}
        {/* {renderGenderCard()} */}
        {/* Bottom section */}
        {renderBottomSection()}
      </OnBoardingLayout>
    </View>
  );
};

export default Gender;
