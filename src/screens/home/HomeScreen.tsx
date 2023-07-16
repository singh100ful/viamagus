import {ButtonAtom} from '@src/components/atoms/ButtonAtom';
import {ContainerAtom} from '@src/components/atoms/ContainerAtom';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {CardTextMolecule} from '@src/components/molecules/CardTextMolecule';
import {CardOrganism} from '@src/components/organisms/CardOrganism';
import {ColorPresets} from '@src/theme/color';
import {scalePresets} from '@src/theme/metrics';
import * as React from 'react';
import {Modal, Pressable, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {PredictionOrganism} from '@src/components/organisms/PredictionOrganism';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const [modal, setModal] = React.useState(false);
  const [data, setData] = React.useState('');

  return (
    <ContainerAtom style={{paddingHorizontal: scalePresets.baseScale}}>
      <Modal visible={modal} transparent animationType="slide">
        <PredictionOrganism data={data} onClose={setModal} />
      </Modal>
      <TextAtom text="Today's games" preset="bodyBold" />
      <CardOrganism under={232} over={123}>
        <View
          style={{
            padding: scalePresets.baseScale,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <CardTextMolecule text1="Prize pool" text2="$12,000" />
            <CardTextMolecule text1="Under" text2="3.25x" />
            <CardTextMolecule text1="Over" text2="1.25x" />
            <CardTextMolecule text1="Entry fees" text2="5" append={true} />
          </View>
          <View style={{paddingVertical: scalePresets.mediumScale}}>
            <TextAtom text="What’s your prediction?" preset="bodySubtitle2" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: scalePresets.mediumScale,
                paddingTop: scalePresets.mediumScale,
              }}>
              <View style={{flex: 1}}>
                <ButtonAtom
                  onPress={() => {
                    setData('Under');
                    setModal(true);
                  }}
                  icon="arrow-down"
                  title="Under"
                  preset="secondary"
                />
              </View>
              <View style={{flex: 1}}>
                <ButtonAtom
                  onPress={() => {
                    setData('Over');
                    setModal(true);
                  }}
                  icon="arrow-up"
                  title="Over"
                  preset="primary"
                />
              </View>
            </View>
          </View>
        </View>
      </CardOrganism>
    </ContainerAtom>
  );
};
