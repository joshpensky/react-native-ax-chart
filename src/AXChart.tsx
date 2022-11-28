import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import type { AXChartDescriptor } from './AXChartDescriptor';
import { NativeAxChartView } from './NativeAxChartView';

export interface AXChartProps {
  descriptor: AXChartDescriptor;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  view: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export function AXChart({
  children,
  descriptor,
  style,
}: PropsWithChildren<AXChartProps>) {
  return (
    <View style={[styles.wrapper, style]}>
      <NativeAxChartView
        style={styles.view}
        accessible
        descriptor={descriptor}
      />
      {children}
    </View>
  );
}
