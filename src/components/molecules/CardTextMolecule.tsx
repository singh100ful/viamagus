import * as React from 'react';
import {View} from 'react-native';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {scalePresets} from '@src/theme/metrics';
import {ColorPresets} from '@src/theme/color';
import {GoldAtom} from '../atoms/GoldAtom';

interface CardTextMoleculeProps {
  text1: string;
  text2: string;
  append?: boolean;
}

export const CardTextMolecule: React.FC<CardTextMoleculeProps> = ({
  text1,
  text2,
  append,
}) => {
  return (
    <View style={{gap: scalePresets.smallScale}}>
      <TextAtom
        text={text1}
        preset="captiond"
        style={{textTransform: 'uppercase'}}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextAtom text={text2} preset="bodySubtitle" />
        {append ? <GoldAtom /> : null}
      </View>
    </View>
  );
};
