#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(AxChartViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(title, NSString?)
RCT_EXPORT_VIEW_PROPERTY(summary, NSString?)
RCT_EXPORT_VIEW_PROPERTY(xAxis, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(yAxis, NSDictionary?)
RCT_EXPORT_VIEW_PROPERTY(series, NSArray)

@end
