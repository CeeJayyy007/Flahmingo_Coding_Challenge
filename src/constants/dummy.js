export const holdings = [
  {
    id: 'bitcoin',
    qty: 888,
  },
  {
    id: 'ethereum',
    qty: 188,
  },
  {
    id: 'dogecoin',
    qty: 88888,
  },
];

export const profile = {
  id: 8888888,
  email: 'byprogrammers@gmail.com',
};

export const settings = {
  launchScreen: 'Home',
  currency: 'USD',
  appearance: 'Dark',
  language: 'English',
  faceId: true,
};

export const assist = [
  {
    id: 1,
    name: 'Learning about the stock',
    icon: require('../assets/icons/watermelon.png'),
    backgroundPattern: require('../assets/images/backgrounds/pattern-primary.png'),
  },
  {
    id: 2,
    name: 'Better investments',
    icon: require('../assets/icons/bed.png'),
    backgroundPattern: require('../assets/images/backgrounds/pattern-secondary.png'),
  },
  {
    id: 3,
    name: 'Track Investments',
    icon: require('../assets/icons/avocado.png'),
    backgroundPattern: require('../assets/images/backgrounds/pattern-primary.png'),
  },
  {
    id: 4,
    name: 'Improve investments',
    icon: require('../assets/icons/flex.png'),
    backgroundPattern: require('../assets/images/backgrounds/pattern-secondary.png'),
  },
];

const dummyData = {
  holdings,
  profile,
  settings,
  assist,
};

export default dummyData;
