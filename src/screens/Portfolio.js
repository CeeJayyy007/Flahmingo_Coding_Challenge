import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {PortfolioCard, PortfolioIndicator} from '../components';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import MainLayout from './MainLayout';

const Portfolio = () => {
  function renderPortfolioProfile() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...FONTS.h3Ex,
              color: COLORS.textLarge,
            }}>
            Portfolio
          </Text>
          <TouchableOpacity>
            <Image
              source={icons.menu}
              style={{
                height: 24,
                width: 24,
                tintColor: COLORS.lightGray3,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <PortfolioIndicator gainAmount="$2,202" overallGainAmount="$5,200" />
        </View>
      </>
    );
  }

  function renderPortfolioCard() {
    return (
      <PortfolioCard
        cardContainerStyle={{backgroundColor: COLORS.primary}}
        clipContainerStyle={{backgroundColor: COLORS.text}}
        notificationComponent={
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: -20,
              right: SIZES.padding * 2,
            }}>
            <Image
              source={icons.notifDark}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </View>
        }
      />
    );
  }

  return (
    <MainLayout>
      <View style={{top: 60, marginHorizontal: SIZES.padding}}>
        {renderPortfolioProfile()}
      </View>
      <View
        style={{
          position: 'absolute',
          top: 200,
          backgroundColor: COLORS.white,
          height: 637,
          width: SIZES.width,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          padding: SIZES.padding,
        }}>
        {/* <ScrollView> */}
        {renderPortfolioCard()}
        {/* </ScrollView> */}
      </View>
    </MainLayout>
  );
};

export default Portfolio;
