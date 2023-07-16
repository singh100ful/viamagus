import * as React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {scalePresets} from '@src/theme/metrics';
import {ColorPresets} from '@src/theme/color';
import Icon from 'react-native-vector-icons/Ionicons';

interface ButtonAtomProps extends PressableProps {
  preset?: TypePresets;
  title: string;
  icon?: string;
}

export const ButtonAtom: React.FC<ButtonAtomProps> = ({
  title,
  preset = 'primary',
  icon,
  ...rest
}) => {
  const viewStyle = [Types[preset]];
  return (
    <Pressable style={viewStyle} {...rest}>
      {icon ? (
        <Icon
          name={icon}
          color={
            preset === 'link' ? ColorPresets.secondaryText : ColorPresets.white
          }
          size={scalePresets.largeScale}
        />
      ) : null}
      <TextAtom
        text={title}
        preset="body"
        style={{
          color:
            preset === 'link' ? ColorPresets.secondaryText : ColorPresets.white,
        }}
      />
    </Pressable>
  );
};

const BASE_VIEW: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  paddingHorizontal: scalePresets.baseScale,
  paddingVertical: scalePresets.mediumScale,
  alignItems: 'center',
  borderRadius: scalePresets.largeScale,
};
const LINK_VIEW: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  paddingHorizontal: scalePresets.baseScale,
  paddingVertical: scalePresets.mediumScale,
  alignItems: 'center',
  borderRadius: scalePresets.largeScale,
  backgroundColor: ColorPresets.white,
};

export const Types = {
  primary: {
    ...BASE_VIEW,
    backgroundColor: ColorPresets.primaryCTA,
  } as ViewStyle,
  secondary: {
    ...BASE_VIEW,
    backgroundColor: ColorPresets.secondaryCTA,
  } as ViewStyle,
  disabled: {
    ...BASE_VIEW,
    backgroundColor: ColorPresets.tertiaryText,
  } as ViewStyle,
  link: {
    ...LINK_VIEW,
  } as ViewStyle,
};

export type TypePresets = keyof typeof Types;
