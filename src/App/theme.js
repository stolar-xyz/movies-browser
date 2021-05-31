const breakpoints = {
  mobileSmallMax: '374',
  mobileMax: '767',
  tabletMax: '1023',
};

const colors = {
  white: '#FFFFFF',
  gallery: '#EEEEEE',
  black: '#000000',
  mystic: '#E4E6F0',
  woodsmoke: '#18181B',
};

export const lightTheme = {
  color: {
    text: {
      primaryText: colors.black,
      secondaryText: '#6C6F81',
      whiteText: colors.white,
    },

    background: {
      primaryBackground: '#F5F5FA',
      secondaryBackground: colors.white,
      genre: colors.mystic,
    },

    element: {
      pageSelectButtonActive: '#D6E4FF',
      pageSelectButtonDisabled: colors.mystic,
      boxShadow: colors.mystic,
    },
  },

  ...breakpoints,
};

export const darkTheme = {
  color: {
    text: {
      primaryText: colors.gallery,
      secondaryText: '#7E839A',
      whiteText: colors.gallery,
    },

    background: {
      primaryBackground: colors.woodsmoke,
      secondaryBackground: colors.black,
      genre: colors.woodsmoke,
    },

    element: {
      pageSelectButtonActive: '#212327',
      pageSelectButtonDisabled: '#111113',
      boxShadow: '#0B0B0E',
    },
  },

  ...breakpoints,
};
