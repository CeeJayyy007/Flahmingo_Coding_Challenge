import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextButton, Header, IconButton, CardItem} from '../../components';
import {FONTS, SIZES, COLORS, icons, dummyData} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Assist = ({navigation}) => {
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
            onPress={() => navigation.navigate('Gender')}
          />
        }
      />
    );
  }

  function renderBodySection() {
    return (
      <View
        style={{
          top: 60,
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
          Let us know how we{'\n'}can help you
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            ...FONTS.body3,
            color: COLORS.text,
          }}>
          You can always change this later
        </Text>
      </View>
    );
  }

  function renderAssistCards() {
    return (
      <View
        style={{
          flex: 1,
          top: 180,
        }}>
        {dummyData.assist.map((item, index) => {
          return (
            <CardItem
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
          top: 100,
        }}>
        <TextButton
          label="Continue"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Gender')}
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

        {/* Assist cards section */}
        {renderAssistCards()}

        {/* Bottom section */}
        {renderBottomSection()}
      </OnBoardingLayout>
    </View>
  );
};

export default Assist;
