import {Images} from '@src/assets';
import {ColorPresets} from '@src/theme/color';
import {scalePresets} from '@src/theme/metrics';
import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {TextAtom} from '../atoms/TextAtom';

interface BadgeMoleculeProps {
  item: {heading: string; description: string};
}

export const BadgeMolecule: React.FC<BadgeMoleculeProps> = ({item}) => {
  return (
    <View
      style={{
        padding: scalePresets.baseScale,
        flexDirection: 'row',
        borderColor: ColorPresets.tertiaryText,
        borderRadius: scalePresets.smallScale,
        borderWidth: 1,
      }}>
      <Image source={Images.Badge} />
      <View
        style={{
          paddingHorizontal: scalePresets.mediumScale,
          gap: scalePresets.mediumScale,
        }}>
        <TextAtom text={item.heading} />
        <TextAtom
          text={item.description}
          preset="bodySubtitle2"
          style={{flexShrink: 1, flexWrap: 'wrap', width: '70%'}}
        />
      </View>
    </View>
  );
};
