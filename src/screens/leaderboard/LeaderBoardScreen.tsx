import {ContainerAtom} from '@src/components/atoms/ContainerAtom';
import * as React from 'react';
import {Text} from 'react-native';

interface LeaderBoardScreenProps {}

export const LeaderBoardScreen: React.FC<LeaderBoardScreenProps> = ({}) => {
  return (
    <ContainerAtom>
      <Text>LeaderBoardScreen</Text>
    </ContainerAtom>
  );
};
