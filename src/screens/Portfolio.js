import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {PortfolioCard, PortfolioIndicator} from '../components';
import {COLORS, FONTS, icons, SIZES, constants} from '../constants';
import MainLayout from './MainLayout';
const Portfolio = () => {
  let stocks = constants.stocks;

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
              color: COLORS.textDark,
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
        <View>
          <PortfolioIndicator gainAmount="$2,202" overallGainAmount="$5,200" />
        </View>
      </>
    );
  }

  function renderPortfolioCard() {
    return (
      <View>
        <PortfolioCard
          cardContainerStyle={{backgroundColor: COLORS.primary}}
          clipContainerStyle={{backgroundColor: COLORS.text}}
          notificationComponent={
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: -20,
                right: SIZES.padding * 1.5,
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: SIZES.padding * 1.5,
          }}>
          <Text style={{...FONTS.h3Ex, fontSize: 18, color: COLORS.textDark}}>
            Top Stocks
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                ...FONTS.h4Ex,
                fontSize: 14,
                color: COLORS.gray3,
                marginTop: SIZES.base,
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTopStocksSection() {
    return (
      <FlatList
        data={stocks}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderPortfolioCard()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View
            style={{
              height: 200,
            }}></View>
        }
        renderItem={item => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: SIZES.padding,
              }}>
              {/* Logo */}
              <View
                style={{
                  width: 50,
                }}>
                <Image
                  source={item.item.icon}
                  style={{height: 48, width: 48}}
                />
              </View>

              {/* product and company name */}

              <View style={{flex: 1, marginHorizontal: SIZES.radius}}>
                <Text
                  style={{
                    ...FONTS.h2Ex,
                    color: COLORS.textDark,
                  }}>
                  {item.item.productName}
                </Text>
                <Text
                  style={{
                    ...FONTS.body5Ex,
                    color: COLORS.textDark,
                  }}>
                  {item.item.companyName}
                </Text>
              </View>

              {/* trend */}

              {/* price, indicator and percent change */}
              <View
                style={{
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    ...FONTS.h3Ex,
                    fontSize: 18,
                    color: COLORS.textDark,
                  }}>
                  {item.item.price}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.item.indicatorIcon}
                    style={{
                      height: 5,
                      width: 5,
                      marginRight: 10,
                    }}
                  />
                  <Text
                    style={{
                      ...FONTS.body5Ex,
                      color: COLORS.textDark,
                    }}>
                    {item.item.percentChange}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }

  return (
    <MainLayout>
      <View style={{top: 40, marginHorizontal: SIZES.padding}}>
        {renderPortfolioProfile()}
      </View>
      <View
        style={{
          position: 'absolute',
          top: 180,
          backgroundColor: COLORS.white,
          height: 612,
          width: SIZES.width,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          padding: SIZES.padding,
        }}>
        {/* Top Stocks */}
        {renderTopStocksSection()}
      </View>
    </MainLayout>
  );
};

export default Portfolio;
