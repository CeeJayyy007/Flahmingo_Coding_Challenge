import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {TextButton, Header, IconButton, InterestCard} from '../../components';
import {FONTS, SIZES, COLORS, icons, constants} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Profile = ({navigation}) => {
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
            onPress={() => navigation.navigate('Interest')}
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
          style={{
            ...FONTS.h2,
            color: COLORS.textLarge,
            textAlign: 'center',
            marginBottom: SIZES.padding,
          }}>
          Profile Photo
        </Text>
        <Image
          source={icons.down}
          style={{height: 10, width: 15, marginVertical: SIZES.radius}}
        />
        {/* Profile picture slider */}
        <FlatList
          data={constants.profile}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <InterestCard
              key={item.id}
              item={item}
              selectedCard={selectedCard}
              isSelected={`${selectedCard?.id}` == `${item.id}`}
              onPress={() => setSelectedCard({...item})}
              iconContainerStyle={{height: 90, width: 90}}
              iconStyle={{height: 30, width: 37.5}}
            />
          )}
        />
        <Image source={icons.up} style={{height: 10, width: 15}} />
        <Text
          style={{
            marginTop: SIZES.padding,
            textAlign: 'center',
            ...FONTS.body3,
            color: COLORS.text,
          }}>
          You can select photo from one of{'\n'}this emoji or add your own photo
          {'\n'} as profile picture
        </Text>

        <View
          style={{
            marginTop: 40,
            top: 20,
          }}>
          <TextButton
            label="Add Custom Photo"
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
          top: 260,
        }}>
        <TextButton
          label="Continue"
          buttonContainerStyle={{height: 56, width: 250}}
          onPress={() => navigation.navigate('Interest')}
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

export default Profile;
