#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(SprigPlugin, "Sprig",
           CAP_PLUGIN_METHOD(configure, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setUserIdentifier, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setEmailAddress, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setVisitorAttribute, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(removeVisitorAttributes, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(trackEvent, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(presentSurvey, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(presentDebugSurvey, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logout, CAPPluginReturnPromise);
)
