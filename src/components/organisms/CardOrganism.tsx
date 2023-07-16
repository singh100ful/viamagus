import {ColorPresets} from '@src/theme/color';
import {scalePresets} from '@src/theme/metrics';
import * as React from 'react';
import {DimensionValue, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextAtom} from '../atoms/TextAtom';

interface CardOrganismProps {
  children: JSX.Element;
  over: number;
  under: number;
}

export const CardOrganism: React.FC<CardOrganismProps> = ({
  children,
  over,
  under,
}) => {
  const percent: DimensionValue =
    ((under / (under + over)) * 100).toFixed(0).toString() + '%';

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.rowStyle}>
          <View style={styles.rowNoSpace}>
            <TextAtom
              text="Under or over "
              preset="caption"
              style={{textTransform: 'uppercase'}}
            />
            <Icon
              name="info-circle"
              size={scalePresets.largeScale}
              color={ColorPresets.tertiaryCTA}
            />
          </View>
          <View style={styles.rowNoSpace}>
            <TextAtom text="Starting in " preset="caption" />
            <Icon
              name="clock"
              size={scalePresets.baseScale}
              color={ColorPresets.tertiaryCTA}
            />
            <TextAtom text=" 03:23:12" preset="caption" />
          </View>
        </View>
        <View style={{paddingTop: scalePresets.baseScale}}>
          <TextAtom text="Bitcoin price will be under" preset="caption" />
          <TextAtom
            text="$24,524 at 7 a ET on 22nd Jan'21"
            preset="captionBold"
          />
        </View>
      </View>
      {children}
      <View
        style={{
          backgroundColor: ColorPresets.opacityCTA,
          padding: scalePresets.baseScale,
        }}>
        <View style={styles.rowStyle}>
          <View style={styles.rowNoSpace}>
            <Icon
              name="user"
              size={scalePresets.baseScale}
              color={ColorPresets.secondaryText}
            />
            <TextAtom text={` ${over + under} Players`} preset="body2" />
          </View>
          <View style={styles.rowNoSpace}>
            <Icon
              name="chart-area"
              size={scalePresets.baseScale}
              color={ColorPresets.secondaryText}
            />
            <TextAtom text=" View chart" preset="body2" />
          </View>
        </View>
        <View>
          <View style={styles.progressBar}>
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  borderTopLeftRadius: scalePresets.mediumScale,
                  borderBottomLeftRadius: scalePresets.mediumScale,
                  backgroundColor: ColorPresets.failure,
                  width: percent,
                },
              ]}
            />
          </View>
          <View style={styles.rowStyle}>
            <TextAtom text={under + ' predicted under'} preset="captiond" />
            <TextAtom text={over + ' predicted over'} preset="captiond" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: scalePresets.smallScale,
    borderColor: ColorPresets.tertiaryText,
    borderWidth: 0.5,
    marginVertical: scalePresets.baseScale,
  },
  firstContainer: {
    backgroundColor: ColorPresets.primaryCTA,
    padding: scalePresets.baseScale,
    borderTopLeftRadius: scalePresets.smallScale,
    borderTopRightRadius: scalePresets.smallScale,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowNoSpace: {flexDirection: 'row', alignItems: 'center'},
  progressBar: {
    marginVertical: scalePresets.mediumScale,
    height: scalePresets.mediumScale,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: ColorPresets.success,
    borderRadius: scalePresets.mediumScale,
  },
});
