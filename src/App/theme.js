const breakpoints = {
  mobileSmallMax: '374',
  mobileMax: '767',
  tabletMax: '1023',
};

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  whisper: '#F5F5FA',
  stormGray: '#717487',
  waterloo: '#7E839A',
  scienceBlue: '#0044CC',
  mystic: '#E4E6F0',
  pattensBlue: '#D6E4FF',
  candlelight: '#FCD420',
};

export const lightTheme = {
  color: {
    text: {
      primaryText: colors.black,
      secondaryText: colors.white,
      extraText: colors.stormGray,
    },

    background: {
      primaryBackground: colors.whisper,
      secondaryBackground: colors.white,
      genre: colors.mystic,
      failureButton: colors.scienceBlue,
      loader: colors.mystic,
    },

    element: {
      arrowheadActive: colors.scienceBlue,
      arrowheadDisabled: colors.waterloo,
      pageSelectButtonActive: colors.pattensBlue,
      pageSelectButtonDisabled: colors.mystic,
    },

    hover: {
      boxBottomShadow: colors.candlelight,
      pageSelectBorder: colors.scienceBlue,
    },
  },

  ...breakpoints,
};

export const darkTheme = {
  color: {},
  ...breakpoints,
};
