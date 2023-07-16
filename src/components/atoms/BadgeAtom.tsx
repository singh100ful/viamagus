import * as React from 'react';
import {ColorPresets} from '@src/theme/color';
import {moderateScale, scalePresets} from '@src/theme/metrics';
import {StyleSheet, View} from 'react-native';
import {TextAtom} from './TextAtom';

interface BadgeAtomProps {
  count: string;
}

export const BadgeAtom: React.FC<BadgeAtomProps> = ({count}) => {
  return (
    <View style={styles.container}>
      <TextAtom text={count} preset="small" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    top: moderateScale(-5),
    right: moderateScale(-5),
    width: moderateScale(18),
    height: moderateScale(18),
    backgroundColor: ColorPresets.primaryCTA,
    paddingVertical: moderateScale(2),
    paddingHorizontal: scalePresets.smallScale,
    borderRadius: scalePresets.mediumScale,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
