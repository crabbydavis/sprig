export interface SprigPlugin {
    configure(options: {
        environmentId: string;
    }): Promise<void>;
    setUserIdentifier(options: {
        identifier: string;
    }): Promise<void>;
    setEmailAddress(options: {
        email: string;
    }): Promise<void>;
    setVisitorAttribute(options: {
        key: string;
        value: string;
    }): Promise<void>;
    removeVisitorAttributes(options: {
        keys: string[];
    }): Promise<void>;
    trackEvent(options: {
        eventName: string;
    }): Promise<void>;
    presentSurvey(options: {
        eventName: string;
    }): Promise<{
        surveryState: SurveyState;
    }>;
    presentDebugSurvey(): Promise<void>;
    logout(): Promise<void>;
}
export declare enum SurveyState {
    ShowSurvery = 0,
    NoSurvey = 1,
    Disabled = 2
}
