import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TextAtom} from './TextAtom';
import {moderateScale, scalePresets} from '@src/theme/metrics';
import {ColorPresets} from '@src/theme/color';
import {Images} from '@src/assets';
import Icon from 'react-native-vector-icons/Ionicons';
import {BadgeAtom} from './BadgeAtom';

interface HeaderAtomProps {
  title: string;
  rightIcon: string;
}

export const HeaderAtom: React.FC<HeaderAtomProps> = ({title, rightIcon}) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={Images.AppLogo} />
      <TextAtom text={title} preset="bodySubtitle2" />
      <View>
        <BadgeAtom count="1" />
        <Icon
          name={rightIcon}
          color={ColorPresets.secondaryText}
          size={scalePresets.xlargeScale}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: ColorPresets.white,
    height: moderateScale(60),
    paddingHorizontal: scalePresets.baseScale,
    paddingVertical: scalePresets.smallScale,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
