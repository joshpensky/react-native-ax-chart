import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AXChart, AXChartDescriptor } from 'src';

export default function App() {
  const descriptor: AXChartDescriptor = {
    title: 'Season Ratings',
    summary:
      'This chart shows the average ratings of every season in the series.',
    xAxis: {
      title: 'Seasons',
      categoryOrder: ['Season 1', 'Season 2', 'Season 3'],
    },
    yAxis: {
      title: 'Ratings',
      lowerBound: 0.5,
      upperBound: 5.0,
      valueDescription: {
        singular: 'star',
        plural: 'stars',
      },
    },
    series: [
      {
        name: 'Average Ratings',
        isContinuous: true,
        dataPoints: [
          { x: 'Season 1', y: 2.4 },
          { x: 'Season 2', y: 4.1 },
          { x: 'Season 3', y: 5.0 },
        ],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <AXChart descriptor={descriptor}>
        <Text>This is a placeholder chart.</Text>
      </AXChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
