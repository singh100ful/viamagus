import {ColorPresets} from '@src/theme/color';
import {scalePresets} from '@src/theme/metrics';
import * as React from 'react';
import {View} from 'react-native';

interface GoldAtomProps {}

export const GoldAtom: React.FC<GoldAtomProps> = ({}) => {
  return (
    <View
      style={{
        marginHorizontal: scalePresets.mediumScale,
        width: scalePresets.baseScale,
        height: scalePresets.baseScale,
        borderRadius: scalePresets.largeScale,
        backgroundColor: ColorPresets.gold,
      }}
    />
  );
};
