import * as React from 'react';
import {scalePresets, moderateScale} from '@src/theme/metrics';
import {Image, ImageSourcePropType, View} from 'react-native';
import {TextAtom} from '../atoms/TextAtom';

interface BioMoleculeProps {
  name: string;
  points: string;
  bio: string;
  picture: ImageSourcePropType;
}

export const BioMolecule: React.FC<BioMoleculeProps> = ({
  name,
  points,
  bio,
  picture,
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        gap: scalePresets.mediumScale,
      }}>
      <Image
        source={picture}
        style={{width: moderateScale(75), height: moderateScale(75)}}
      />
      <TextAtom text={name} />
      <TextAtom text={points + ' pts'} preset="bodySubtitle2" />
      <TextAtom text={bio} preset="bodySubtitle2" />
    </View>
  );
};
