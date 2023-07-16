import {ColorPresets} from '@src/theme/color';
import {scaleFont} from '@src/theme/metrics';

export const FONT_MEDIUM = 'Montserrat-Medium';
export const FONT_SEMIBOLD = 'Montserrat-SemiBold';
export const FONT_BOLD = 'Montserrat-Bold';

export const medium = {
  fontFamily: FONT_MEDIUM,
};

export const bold = {
  fontFamily: FONT_BOLD,
};
export const semiBold = {
  fontFamily: FONT_SEMIBOLD,
};

export const fontTypes = {
  medium,
  semiBold,
  bold,
};

export const defaultTexts = {
  title1: {
    ...bold,
    color: ColorPresets.primaryText,
    fontSize: scaleFont(30),
    lineHeight: scaleFont(40),
    letterSpacing: 0,
  },
  bodyBold: {
    ...semiBold,
    color: ColorPresets.primaryText,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
  body: {
    ...medium,
    color: ColorPresets.primaryText,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
  bodySubtitle: {
    ...medium,
    color: ColorPresets.primaryText,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
  tabLabel: {
    ...semiBold,
    fontSize: scaleFont(10),
    lineHeight: scaleFont(12),
    letterSpacing: 0,
  },
  caption: {
    ...medium,
    color: ColorPresets.tertiaryCTA,
    fontSize: scaleFont(12),
    lineHeight: scaleFont(16),
    letterSpacing: 0,
  },
  caption2: {
    ...medium,
    color: ColorPresets.tertiaryCTA,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(20),
    letterSpacing: 0,
  },
  captionBold: {
    ...semiBold,
    color: ColorPresets.white,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(20),
    letterSpacing: 0,
  },
  small: {
    ...medium,
    color: ColorPresets.white,
    fontSize: scaleFont(11),
    lineHeight: scaleFont(13),
    letterSpacing: 0,
  },
};
