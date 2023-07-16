import * as React from 'react';
import {ContainerAtom} from '@src/components/atoms/ContainerAtom';
import {HeaderAtom} from '@src/components/atoms/HeaderAtom';
import {ColorPresets} from '@src/theme/color';
import {ScrollView, View} from 'react-native';
import {Images} from '@src/assets';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {scalePresets} from '@src/theme/metrics';
import {BioMolecule} from '@src/components/molecules/BioMolecule';
import {ButtonAtom} from '@src/components/atoms/ButtonAtom';
import {HighlightMolecule} from '@src/components/molecules/HighlightMolecule';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Games} from './pages/Games';
import {Badges} from './pages/Badges';

interface ProfileScreenProps {}

const renderScene = SceneMap({
  games: Games,
  badges: Badges,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    renderLabel={({focused, route}) => (
      <TextAtom
        text={route.title!}
        style={{
          color: focused ? ColorPresets.primaryCTA : ColorPresets.secondaryText,
        }}
      />
    )}
    indicatorStyle={{backgroundColor: ColorPresets.primaryCTA}}
    style={{backgroundColor: ColorPresets.white}}
  />
);

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'games', title: 'Games played'},
    {key: 'badges', title: 'Badges'},
  ]);

  return (
    <ContainerAtom style={{flex: 1, backgroundColor: ColorPresets.white}}>
      <HeaderAtom title="Profile" rightIcon="chatbox" />
      <ScrollView
        contentContainerStyle={{
          height: '200%',
          flexGrow: 1,
          overflow: 'scroll',
        }}>
        <View style={{paddingHorizontal: scalePresets.baseScale}}>
          <BioMolecule
            name="Jina Simons"
            points="6000"
            bio="I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!"
            picture={Images.ProfilePic}
          />
          <ButtonAtom title="Logout" icon="log-out-outline" preset="link" />
          <HighlightMolecule over={81} under={51} />
        </View>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: scalePresets.screenWidth}}
        />
      </ScrollView>
    </ContainerAtom>
  );
};
