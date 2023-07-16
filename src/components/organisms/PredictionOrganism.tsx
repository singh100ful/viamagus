import {Picker} from '@react-native-picker/picker';
import {ColorPresets} from '@src/theme/color';
import {scalePresets} from '@src/theme/metrics';
import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {ButtonAtom} from '../atoms/ButtonAtom';
import {TextAtom} from '../atoms/TextAtom';
import {GoldAtom} from '../atoms/GoldAtom';

interface PredictionOrganismProps {
  data: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PredictionOrganism: React.FC<PredictionOrganismProps> = ({
  data,
  onClose,
}) => {
  const [select, setSelect] = React.useState('');

  const prediction = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressableContainer}
        onPress={() => onClose(false)}
      />
      <View style={styles.mainContainer}>
        <TextAtom preset="bodyBold" text={'Your Prediction is ' + data} />
        <View style={{paddingVertical: scalePresets.baseScale}}>
          <TextAtom
            text="Entry tickets"
            preset="bodySubtitle2"
            style={{textTransform: 'uppercase'}}
          />
          <Picker
            selectionColor={ColorPresets.opacityCTA}
            selectedValue={select}
            onValueChange={itemValue => setSelect(itemValue)}>
            {prediction.map((data, index) => {
              return (
                <Picker.Item key={index} label={data.toString()} value={data} />
              );
            })}
          </Picker>
          <View style={styles.rowStyle}>
            <View>
              <TextAtom text="You can win" preset="captiond" />
              <TextAtom text="$2000" style={{color: ColorPresets.success2}} />
            </View>
            <View style={styles.rowNoSpace}>
              <TextAtom text="Total" preset="captiond" />
              <GoldAtom />
              <TextAtom text="5" />
            </View>
          </View>
        </View>
        <View>
          <ButtonAtom
            title="Submit my prediction"
            onPress={() => onClose(false)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: ColorPresets.primaryTextOpacity},
  pressableContainer: {flex: 2, backgroundColor: ColorPresets.transparent},
  mainContainer: {
    flex: 3,
    backgroundColor: ColorPresets.white,
    borderTopLeftRadius: scalePresets.largeScale,
    borderTopRightRadius: scalePresets.largeScale,
    paddingTop: scalePresets.largeScale,
    paddingHorizontal: scalePresets.baseScale,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowNoSpace: {flexDirection: 'row', alignItems: 'center'},
});
