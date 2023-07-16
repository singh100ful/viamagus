import {ContainerAtom} from '@src/components/atoms/ContainerAtom';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {ColorPresets} from '@src/theme/color';
import {scalePresets} from '@src/theme/metrics';
import * as React from 'react';
import {Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Badges} from '../profile/pages/Badges';
import {Games} from '../profile/pages/Games';

interface LeaderBoardScreenProps {}
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

export const LeaderBoardScreen: React.FC<LeaderBoardScreenProps> = ({}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'games', title: 'Games played'},
    {key: 'badges', title: 'Badges'},
  ]);
  return (
    <ContainerAtom style={{flex: 1}}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: scalePresets.screenWidth}}
      />
    </ContainerAtom>
  );
};
