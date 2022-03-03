import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#4C5980',
  textLarge: '#2D3142',
  primary: '#FF63AF',
  primaryLight: '#FEEEF3',
  secondary: '#7265E3',
  success: '#28a745',
  error: '#dc3545',
  tertiary: '#80B4A0',

  lightGreen: '#4BEE70',
  red: '#D84035',
  black: '#000000',
  gray: '#212125',
  gray1: '#1f1f1f',
  lightGray: '#3B3B3B',
  lightGray2: '#212125',
  lightGray3: '#757575',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.8)',
  transparentBlack1: 'rgba(0, 0, 0, 0.4)',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 36,
  h1: 28,
  h2: 24,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 38,
  body2: 24,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {fontFamily: 'Rubik-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Rubik-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Rubik-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Rubik-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Rubik-Bold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Rubik-Bold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {fontFamily: 'Rubik-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Rubik-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Rubik-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Rubik-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Rubik-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
