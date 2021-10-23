export interface SprigPlugin {
  configure(options: { environmentId: string }): Promise<void>;
  setUserIdentifier(options: { identifier: string }): Promise<void>;
  setEmailAddress(options: { email: string }): Promise<void>;
  setVisitorAttribute(options: { key: string, value: string }): Promise<void>;
  removeVisitorAttributes(options: { keys: string[] }): Promise<void>; // iOS Only
  trackEvent(options: { eventName: string }): Promise<void>;
  presentSurvey(options: { eventName: string }): Promise<{ surveryState: SurveyState }>;
  presentDebugSurvey(): Promise<void>;
  logout(): Promise<void>;
}

export enum SurveyState {
  ShowSurvery, // We received a survey for the event, present it to the user
  NoSurvey, // No survey available based on event
  Disabled // Sprig has been disabled remotely
}