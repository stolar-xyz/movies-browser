const breakpoints = {
  mobileSmallMax: '374',
  mobileMax: '767',
  tabletMax: '1023',
};

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  mystic: '#E4E6F0',
  woodsmoke: '#18181B',
};

export const lightTheme = {
  color: {
    text: {
      primaryText: colors.black,
      secondaryText: '#717487',
    },

    background: {
      primaryBackground: '#F5F5FA',
      secondaryBackground: colors.white,
      genre: colors.mystic,
    },

    element: {
      pageSelectButtonActive: '#D6E4FF',
      pageSelectButtonDisabled: colors.mystic,
      boxShadow: '#eaedf3',
    },
  },

  ...breakpoints,
};

export const darkTheme = {
  color: {
    text: {
      primaryText: '#e3e3e3',
      secondaryText: '#7E839A',
    },

    background: {
      primaryBackground: colors.woodsmoke,
      secondaryBackground: colors.black,
      genre: colors.woodsmoke,
    },

    element: {
      pageSelectButtonActive: '#212327',
      pageSelectButtonDisabled: '#111113',
      boxShadow: colors.woodsmoke,
    },
  },

  ...breakpoints,
};
