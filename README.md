# react-native-ax-chart

React Native wrapper for iOS's accessible charts protocol [AXChart](https://developer.apple.com/documentation/accessibility/axchart)

## Installation

```sh
yarn add react-native-ax-chart
pod install
```

## Supported Features

🚧 TODO 🚧

## Usage

```tsx
import { AXChart, AXChartProps } from 'react-native-ax-chart';

const chart: AXChartProps = {
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
  <AXChart {...chart}>
    <SeasonRatingsChart />
  </AXChart>;
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
