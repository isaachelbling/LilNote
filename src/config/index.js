const _colors = {
  cream: '#faefde',
  pink: '#e91e63',
  teal: '#8ce2d7',
  // teal2: '#5cb',
  purple: '#8e6d9f',
  orange: '#f40',
  darkGray: '#555',
  mediumGray: '#888',
  lightGray: '#bbb',
  brown: '#ca9'
}

export default {
  user: 'Isaac',
  auth: {
    google: {
      androidClientId: '51705587624-st2fknhn6avhecdv9fg8iacm7baaa2h8.apps.googleusercontent.com'
    }
  },
  giphy: {
    apiKey: 'CWT9HXykv90uJUan8LW1gini2XLzLLuH'
  },
  firebase: {
    databaseURL: 'https://lilnote-965c1.firebaseio.com',
    apiKey: 'AIzaSyAGBhj-Mwu_qV4AK_zTTXSfCsQtzZfop50',
    storageBucket: 'lilnote-965c1.appspot.com',
  },
  textInputHeight: 60,
  icons: {
    x: require('../../assets/images/icons8-delete-96.png'),
    downArrow: require('../../assets/images/icons8-down-arrow-100.png'),
    text: require('../../assets/images/dotty/icons8-font-size-240.png'),
    gif: require('../../assets/images/dotty/icons8-gif-240.png'),
    video: require('../../assets/images/dotty/icons8-video-camera-128.png'),
    photo: require('../../assets/images/dotty/icons8-compact-camera-128.png'),
    draw: require('../../assets/images/dotty/icons8-crayon-240.png'),

    signOut: require('../../assets/images/dotty/icons8-exit-128.png'),
    paintPalette: require('../../assets/images/dotty/icons8-paint-palette-128.png'),
    search: require('../../assets/images/dotty/icons8-search-128.png'),
    settings: require('../../assets/images/dotty/icons8-settings-128.png')
  },
  colors: {
    ..._colors,
    primary: _colors.teal,
    secondary: _colors.purple,
    background: _colors.cream,
    grayedOut: _colors.lightGray,
    emptyPageText: _colors.brown
  },
}