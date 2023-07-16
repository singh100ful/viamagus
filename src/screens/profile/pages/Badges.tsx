import {ContainerAtom} from '@src/components/atoms/ContainerAtom';
import {BadgeMolecule} from '@src/components/molecules/BadgeMolecule';
import {BadgeData} from '@src/constants/data';
import {ColorPresets} from '@src/theme/color';
import {scalePresets} from '@src/theme/metrics';
import * as React from 'react';
import {View} from 'react-native';

interface BadgesProps {}

export const Badges: React.FC<BadgesProps> = ({}) => {
  return (
    <ContainerAtom style={{backgroundColor: ColorPresets.white}}>
      <View
        style={{
          gap: scalePresets.mediumScale,
          paddingVertical: scalePresets.baseScale,
          paddingHorizontal: scalePresets.baseScale,
        }}>
        {BadgeData.map((item, index) => {
          return <BadgeMolecule key={index} item={item} />;
        })}
      </View>
    </ContainerAtom>
  );
};
