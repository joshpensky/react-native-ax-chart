export interface AXChartDescriptor {
  /** The title of the chart. */
  title?: string;
  /** A description of the key takeaways or features of the chart. */
  summary?: string;
  /** The axis descriptor for the chart’s x-axis. */
  xAxis: {
    /** The title of the x-axis. */
    title: string;
    /** An array of categories in the specified order. */
    categoryOrder: string[];
  };
  /** The axis descriptor for the chart’s y-axis. */
  yAxis?: {
    /** The title of the y-axis. */
    title: string;
    /** The minimum displayable value for the axis. */
    lowerBound: number;
    /** The maximum displayable value for the axis. */
    upperBound: number;
    /** A configuration for the description to speak for a particular data value on the axis. */
    valueDescription: {
      /** The singular form of the descriptor. */
      singular: string;
      /** The plural form of the descriptor. */
      plural: string;
    };
  };
  /** The descriptors for each data series in the chart. */
  series: {
    /** The name of the data series. */
    name: string;
    /** A Boolean value that determines whether the data series is continuous. */
    isContinuous: boolean;
    /** The data points that the series contains. */
    dataPoints: {
      /** The value of the x-axis for the data point. */
      x: string;
      /** The value of the y-axis for the data point. */
      y: number;
    }[];
  }[];
}
