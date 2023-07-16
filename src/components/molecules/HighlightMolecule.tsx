import {ColorPresets} from '@src/theme/color';
import {scalePresets} from '@src/theme/metrics';
import * as React from 'react';
import {Image, View} from 'react-native';
import {HighlightAtom} from '../atoms/HighlightAtom';
import {Images} from '@src/assets';

interface HighlightMoleculeProps {
  over: number;
  under: number;
}

export const HighlightMolecule: React.FC<HighlightMoleculeProps> = ({
  over,
  under,
}) => {
  return (
    <View
      style={{
        marginTop: scalePresets.largeScale,
        borderRadius: scalePresets.smallScale,
        borderColor: ColorPresets.tertiaryText,
        borderWidth: 1,
        padding: scalePresets.mediumScale,
        paddingTop: scalePresets.largeScale,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          top: -15,
          width: '85%',
        }}>
        <Image source={Images.GoldStar} />
      </View>
      <HighlightAtom
        heading="Under or over"
        text={over + '%'}
        icon="arrow-up"
        bgColor={ColorPresets.success2}
      />
      <HighlightAtom
        heading="Top 5"
        text={'-' + under + '%'}
        icon="arrow-down"
        bgColor={ColorPresets.danger}
      />
    </View>
  );
};
