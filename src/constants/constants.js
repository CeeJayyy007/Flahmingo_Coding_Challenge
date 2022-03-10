const marketTabs = [
  {
    id: 1,
    title: 'Cryptoassets',
  },
  {
    id: 2,
    title: 'Exchanges',
  },
];

//API
// My Holdings
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}

// Coin Market
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}

const stocks = [
  {
    id: 1,
    productName: 'TWTR',
    companyName: 'Twitter Inc.',
    price: '$35.98',
    percentChange: '0.23%',
    icon: require('../assets/icons/twitter.png'),
    indicatorIcon: require('../assets/icons/triangle.png'),
  },
  {
    id: 2,
    productName: 'GOOGL',
    companyName: 'Alphabeth Inc.',
    price: '$2.84',
    percentChange: '0.23%',
    icon: require('../assets/icons/google.png'),
    indicatorIcon: require('../assets/icons/triangle-down.png'),
  },
  {
    id: 3,
    productName: 'MSFT',
    companyName: 'Microsoft',
    price: '$43.72',
    percentChange: '0.23%',
    icon: require('../assets/icons/microsoft.png'),
    indicatorIcon: require('../assets/icons/triangle-down.png'),
  },
  {
    id: 4,
    productName: 'NIKE',
    companyName: 'Nike, Inc',
    price: '$22.88',
    percentChange: '0.23%',
    icon: require('../assets/icons/nike.png'),
    indicatorIcon: require('../assets/icons/triangle.png'),
  },
  {
    id: 5,
    productName: 'SPOT',
    companyName: 'Spotify',
    price: '$93.08',
    percentChange: '0.23%',
    icon: require('../assets/icons/spotify.png'),
    indicatorIcon: require('../assets/icons/triangle-down.png'),
  },
  {
    id: 6,
    productName: 'TSLA',
    companyName: 'Tesla Motors',
    price: '$163.98',
    percentChange: '0.23%',
    icon: require('../assets/icons/tesla.png'),
    indicatorIcon: require('../assets/icons/triangle.png'),
  },
  {
    id: 7,
    productName: 'FB',
    companyName: 'Facebook, Inc',
    price: '$36.18',
    percentChange: '0.23%',
    icon: require('../assets/icons/facebook.png'),
    indicatorIcon: require('../assets/icons/triangle-down.png'),
  },
];

const gender = [
  {
    id: 1,
    gender: 'Male',
    image: require('../assets/images/backgrounds/male.png'),
  },
  {
    id: 2,
    gender: 'Female',
    image: require('../assets/images/backgrounds/female.png'),
  },
];

const notifications = [
  {
    id: 1,
    name: 'New weekly reminder',
    icon: require('../assets/icons/star.png'),
  },
  {
    id: 2,
    name: 'Stocks reminder',
    icon: require('../assets/icons/fire.png'),
  },
  {
    id: 3,
    name: 'Personalised program',
    icon: require('../assets/icons/heart.png'),
  },
];

const level = [
  {
    id: 1,
    title: 'Moderate Intensity',
    description: 'I always invest regularly two or three times a week',
    image: require('../assets/images/backgrounds/level.png'),
    backgroundImage: require('../assets/images/backgrounds/bg-level.png'),
  },
  {
    id: 2,
    title: 'Normal Intensity',
    description: 'I always invest regularly two or three times a week',
    image: require('../assets/images/backgrounds/male.png'),
    backgroundImage: require('../assets/images/backgrounds/bg-level.png'),
  },
  {
    id: 3,
    title: 'High Intensity',
    description: 'I always invest regularly two or three times a week',
    image: require('../assets/images/backgrounds/fingerprint.png'),
    backgroundImage: require('../assets/images/backgrounds/bg-level.png'),
  },
];

const interests = [
  {
    id: 1,
    name: 'Tech',
    icon: require('../assets/icons/watermelon.png'),
  },
  {
    id: 2,
    name: 'Health',
    icon: require('../assets/icons/health.png'),
  },
  {
    id: 3,
    name: 'Finance',
    icon: require('../assets/icons/finance.png'),
  },
  {
    id: 4,
    name: 'Crypto',
    icon: require('../assets/icons/crypto.png'),
  },
  {
    id: 5,
    name: 'Category',
    icon: require('../assets/icons/category.png'),
  },
  {
    id: 6,
    name: 'Sleep',
    icon: require('../assets/icons/bed.png'),
  },
  {
    id: 7,
    name: 'Health',
    icon: require('../assets/icons/flex.png'),
  },
  {
    id: 8,
    name: 'Running',
    icon: require('../assets/icons/running.png'),
  },
  {
    id: 9,
    name: 'Vegan',
    icon: require('../assets/icons/avocado.png'),
  },
];

const profile = [
  {
    id: 1,
    icon: require('../assets/icons/monkey.png'),
  },
  {
    id: 2,
    icon: require('../assets/icons/ghost.png'),
  },
  {
    id: 3,
    icon: require('../assets/icons/cat.png'),
  },
  {
    id: 4,
    icon: require('../assets/icons/crypto.png'),
  },
  {
    id: 5,
    icon: require('../assets/icons/category.png'),
  },
  {
    id: 6,
    icon: require('../assets/icons/bed.png'),
  },
  {
    id: 7,
    icon: require('../assets/icons/flex.png'),
  },
  {
    id: 8,
    icon: require('../assets/icons/running.png'),
  },
  {
    id: 9,
    icon: require('../assets/icons/avocado.png'),
  },
];

const constants = {
  marketTabs,
  stocks,
  gender,
  notifications,
  level,
  interests,
  profile,
};
export default constants;
