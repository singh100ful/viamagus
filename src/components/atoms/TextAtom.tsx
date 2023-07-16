import {ColorPresets} from '@src/theme/color';
import {defaultTexts} from '@src/theme/fonts';
import * as React from 'react';
import {Text, TextProps, TextStyle, View} from 'react-native';

interface TextAtomProps extends TextProps {
  text: string;
  style?: TextStyle;
  preset?: TextPresets;
}

export const TextAtom: React.FC<TextAtomProps> = ({
  text,
  style,
  preset = 'body',
  ...rest
}) => {
  const textStyle = [Presets[preset], style];
  return (
    <View>
      <Text {...rest} style={[textStyle]}>
        {text}
      </Text>
    </View>
  );
};

const Presets = {
  title: {...defaultTexts.title1} as TextStyle,
  bodyBold: {...defaultTexts.bodyBold} as TextStyle,
  body: {...defaultTexts.body} as TextStyle,
  body2: {...defaultTexts.body, color: ColorPresets.secondaryText} as TextStyle,
  bodySubtitle: {...defaultTexts.bodySubtitle} as TextStyle,
  bodySubtitle2: {
    ...defaultTexts.bodySubtitle,
    color: ColorPresets.secondaryText,
  } as TextStyle,
  caption: {...defaultTexts.caption} as TextStyle,
  captiond: {
    ...defaultTexts.caption,
    color: ColorPresets.tertiaryText,
  } as TextStyle,
  caption2: {...defaultTexts.caption2} as TextStyle,
  captionBold: {...defaultTexts.captionBold} as TextStyle,
  captionBold2: {
    ...defaultTexts.captionBold,
    color: ColorPresets.secondaryText,
  } as TextStyle,
  small: {...defaultTexts.small} as TextStyle,
};

export type TextPresets = keyof typeof Presets;
