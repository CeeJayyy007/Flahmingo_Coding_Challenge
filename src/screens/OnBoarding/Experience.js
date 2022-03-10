import React, {useRef, useState} from 'react';
import {View, Text, Animated, ImageBackground, Image} from 'react-native';
import {TextButton, Header, IconButton} from '../../components';
import {FONTS, SIZES, COLORS, icons, images, constants} from '../../constants';
import OnBoardingLayout from './OnBoardingLayout';

const Experience = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const flatListRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewChangeRef = useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          bottom: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {constants.level.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.secondaryLight,
              COLORS.secondary,
              COLORS.secondaryLight,
            ],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
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
          What is your current{'\n'}Experience level?
        </Text>
      </View>
    );
  }

  function renderFooter() {
    return (
      <>
        <View
          style={{
            height: 200,
          }}>
          {/* Pagination  */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            {/* Buttons */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding,
                marginVertical: SIZES.padding,
                marginBottom: 110,
              }}>
              <TextButton
                label="Select"
                buttonContainerStyle={{
                  height: 60,
                  width: 176,
                  borderRadius: 50,
                }}
                onPress={() => navigation.replace('Notification')}
              />
            </View>
          </View>
        </View>
        <Dots />
      </>
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

        {/* Page slider */}

        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          data={constants.level}
          scrollEventThrottle={10}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={onViewChangeRef.current}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: SIZES.width,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 3,
                    top: 160,
                  }}>
                  <ImageBackground
                    source={item.backgroundImage}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 455,
                      width: 288,
                      borderRadius: 20,
                    }}>
                    <View>
                      <Image
                        source={images.levelIntensity}
                        resizeMode="contain"
                        style={{
                          position: 'absolute',
                          top: 20,
                          height: 40,
                          width: 72,
                          marginLeft: -120,
                        }}
                      />
                    </View>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{
                        top: 60,
                        height: 156,
                        width: 194,
                      }}
                    />

                    {/* Details */}
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.radius,
                        marginBottom: SIZES.padding,
                      }}>
                      <Text
                        style={{
                          ...FONTS.h2,
                          fontSize: 18,
                          color: COLORS.textLarge,
                          marginBottom: SIZES.base,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: COLORS.darkGray,
                          paddingHorizontal: SIZES.padding,
                          ...FONTS.body3,
                        }}>
                        {item.description}
                      </Text>
                      {renderFooter()}
                    </View>
                  </ImageBackground>
                </View>
              </View>
            );
          }}
        />
      </OnBoardingLayout>
    </View>
  );
};

export default Experience;
