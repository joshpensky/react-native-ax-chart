import {
  requireNativeComponent,
  UIManager,
  Platform,
  View,
} from 'react-native';
import type { AXChartProps } from './AXChart';

const LINKING_ERROR =
  `The package 'react-native-ax-chart' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ComponentName = 'AxChartView';

export const NativeAxChartView = Platform.select({
  ios:
    UIManager.getViewManagerConfig(ComponentName) != null
      ? requireNativeComponent<AXChartProps>(ComponentName)
      : () => {
          throw new Error(LINKING_ERROR);
        },
  default: View as any,
});
