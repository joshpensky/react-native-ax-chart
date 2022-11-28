import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-ax-chart' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type AxChartProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'AxChartView';

export const AxChartView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<AxChartProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
