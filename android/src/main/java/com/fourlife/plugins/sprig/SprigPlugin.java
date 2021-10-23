package com.fourlife.plugins.sprig;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.content.Context;

import androidx.fragment.app.FragmentActivity;

import com.userleap.UserLeap;

@CapacitorPlugin(name = "Sprig")
public class SprigPlugin extends Plugin {

    @PluginMethod
    public void configure(PluginCall call) {
        String environmentId = call.getString("environmentId");
        Context context = getContext();
        UserLeap.INSTANCE.configure(context, environmentId);
        call.resolve();
    }

    @PluginMethod
    public void setUserIdentifier(PluginCall call) {
        String identifier = call.getString("identifier");
        UserLeap.INSTANCE.setUserIdentifier(identifier);
        call.resolve();
    }

    @PluginMethod
    public void setEmailAddress(PluginCall call) {
        String email = call.getString("email");
        UserLeap.INSTANCE.setEmailAddress(email);
        call.resolve();
    }

    @PluginMethod
    public void setVisitorAttribute(PluginCall call) {
        String key = call.getString("key");
        String value = call.getString("value");
        UserLeap.INSTANCE.setVisitorAttribute(key, value);
        call.resolve();
    }

    @PluginMethod
    public void removeVisitorAttributes(PluginCall call) {
        call.unimplemented("Not implemented on Android.");
    }

    @PluginMethod
    public void trackEvent(PluginCall call) {
        String eventName = call.getString("eventName");
        UserLeap.INSTANCE.track(eventName, null);
        call.resolve();
    }

    @PluginMethod
    public void presentSurvey(PluginCall call) {
        JSObject ret = new JSObject();
        String eventName = call.getString("eventName");
        UserLeap.INSTANCE.track(eventName, (surveyState) -> {
            FragmentActivity activity = getActivity();
            UserLeap.INSTANCE.presentSurvey(activity);
            switch (surveyState) {
                case READY:
                    // We received a survey for the event, present it to the user
                    ret.put("surveryState", 0);
                    break;
                case NO_SURVEY:
                    // No survey available based on event
                    ret.put("surveryState", 1);
                    break;
                case DISABLED:
                    // Sprig has been disabled remotely
                    ret.put("surveryState", 2);
                    break;
            }
            call.resolve(ret);
            return null;
        });
    }

    @PluginMethod
    public void presentDebugSurvey(PluginCall call) {
        FragmentActivity activity = getActivity();
        UserLeap.INSTANCE.presentDebugSurvey(activity);
        call.resolve();
    }

    @PluginMethod
    public void logout(PluginCall call) {
        UserLeap.INSTANCE.logout();
        call.resolve();
    }
}
