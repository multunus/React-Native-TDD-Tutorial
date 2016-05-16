#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  NSString* buildEnvironment = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"BuildEnvironment"];
  return @{ @"buildEnvironment": buildEnvironment };
}

@end