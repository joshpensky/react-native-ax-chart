import Foundation
import UIKit
import Accessibility

@objc(AxChartViewManager)
class AxChartViewManager: RCTViewManager {
      override func view() -> UIView {
          if #available(iOS 15.0, *) {
              return AxChartView()
          } else {
              return UIView()
          }
      }

      @objc override static func requiresMainQueueSetup() -> Bool {
          return false
      }
}

@available(iOS 15.0, *)
class AxChartView: UIView, AXChart {
    @objc var title: NSString? = nil
    @objc var summary: NSString? = nil
    @objc var xAxis: NSDictionary = [:]
    @objc var yAxis: NSDictionary? = nil
    @objc var series: NSArray = []
    
    var accessibilityChartDescriptor: AXChartDescriptor? {
        get {
            guard let xAxisTitle = xAxis["title"] as? String,
                  let xAxisCategoryOrder = xAxis["categoryOrder"] as? [String] else {
                return nil
            }
            let xAxis = AXCategoricalDataAxisDescriptor(title: xAxisTitle, categoryOrder: xAxisCategoryOrder)
        
            var yAxis: AXNumericDataAxisDescriptor? = nil
            if let yAxisDict = self.yAxis {
                guard let yAxisTitle = yAxisDict["title"] as? String,
                      let yAxisLowerBound = yAxisDict["lowerBound"] as? Double,
                      let yAxisUpperBound = yAxisDict["upperBound"] as? Double,
                      let yAxisValueDescription = yAxisDict["valueDescription"] as? NSDictionary,
                      let yAxisValueDescriptionSingular = yAxisValueDescription["singular"] as? String,
                      let yAxisValueDescriptionPlural = yAxisValueDescription["plural"] as? String else {
                    return nil
                }
                yAxis = AXNumericDataAxisDescriptor(
                    title: yAxisTitle,
                    range: yAxisLowerBound...yAxisUpperBound,
                    gridlinePositions: [], // [Double]
                    valueDescriptionProvider: { value in
                        if value == 1 {
                            return "\(value) \(yAxisValueDescriptionSingular)"
                        } else {
                            return "\(value) \(yAxisValueDescriptionPlural)"
                        }
                    }
                )
            }
        
            var series: [AXDataSeriesDescriptor] = []
            self.series.forEach { element in
                guard let dict = element as? NSDictionary,
                      let name = dict["name"] as? String,
                      let isContinuous = dict["isContinuous"] as? Bool,
                      let nsDataPoints = dict["dataPoints"] as? NSArray else {
                    return
                }
          
                var dataPoints: [AXDataPoint] = []
                nsDataPoints.forEach { element in
                guard let dict = element as? NSDictionary,
                      let x = dict["x"] as? String,
                      let y = dict["y"] as? Double else {
                    return
                }
            
                    let point = AXDataPoint(x: x, y: y)
                    dataPoints.append(point)
                }
          
                let descriptor = AXDataSeriesDescriptor(
                    name: name,
                    isContinuous: isContinuous,
                    dataPoints: dataPoints
                )
                series.append(descriptor)
            }
        
            return AXChartDescriptor(
                title: title as String?,
                summary: summary as String?,
                xAxis: xAxis,
                yAxis: yAxis,
                additionalAxes: [], // [AXDataAxisDescriptor],
                series: series
            )
        }
        
        set {}
    }
}
