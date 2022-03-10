import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextButton, Header, IconButton, InterestCard} from '../../components';
import {FONTS, SIZES, COLORS, icons, constants} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Interest = ({navigation}) => {
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
        rightComponent={
          <TextButton
            label="Skip"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{color: COLORS.primary}}
            onPress={() => navigation.navigate('Assist')}
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
          Time to customize {'\n'}your interests
        </Text>
      </View>
    );
  }

  function renderSelectInterestSection() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          top: 110,
          marginTop: SIZES.padding * 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {constants.interests.map((item, index) => {
          return (
            <InterestCard
              key={item.id}
              item={item}
              selectedCard={selectedCard}
              isSelected={`${selectedCard?.id}` == `${item.id}`}
              onPress={() => setSelectedCard({...item})}
            />
          );
        })}
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
          top: 40,
        }}>
        <TextButton
          label="Continue"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Assist')}
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

        {/* select interest section */}
        {renderSelectInterestSection()}

        {/* Bottom section */}
        {renderBottomSection()}
      </OnBoardingLayout>
    </View>
  );
};

export default Interest;
