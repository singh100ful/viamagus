import {scalePresets} from '@src/theme/metrics';
import * as React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextAtom} from './TextAtom';

interface HighlightAtomProps {
  heading: string;
  text: string;
  icon: string;
  bgColor: string;
}

export const HighlightAtom: React.FC<HighlightAtomProps> = ({
  heading,
  text,
  icon,
  bgColor,
}) => {
  return (
    <View>
      <TextAtom text={heading} preset="captionBold2" />
      <View
        style={{
          paddingVertical: scalePresets.mediumScale,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: scalePresets.xlargeScale,
            backgroundColor: bgColor + '33',
          }}>
          <Icon name={icon} size={scalePresets.xlargeScale} color={bgColor} />
        </View>
        <TextAtom text={text} preset="title" />
      </View>
    </View>
  );
};
