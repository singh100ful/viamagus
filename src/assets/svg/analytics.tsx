import {Rect, Svg} from 'react-native-svg';

export const AnalyticsIcon = (props: {
  color?: string;
  size?: number;
  style?: any;
}) => {
  return (
    <Svg width="21" height="17" viewBox="0 0 21 17" fill="none">
      <Rect y="4" width="5" height="13" rx="1" fill={props.color} />
      <Rect x="8" width="5" height="17" rx="1" fill={props.color} />
      <Rect x="16" y="8" width="5" height="9" rx="1" fill={props.color} />
    </Svg>
  );
};
