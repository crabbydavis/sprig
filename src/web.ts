import { WebPlugin } from '@capacitor/core';
import { SurveyState } from '.';

import type { SprigPlugin } from './definitions';

export class SprigWeb extends WebPlugin implements SprigPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async configure(options: { environmentId: string }): Promise<void> {
    return;
  }
  async setUserIdentifier(options: { identifier: string }): Promise<void> {

  }
  async setEmailAddress(options: { email: string }): Promise<void> {

  }
  async setVisitorAttribute(options: { key: string, value: string }): Promise<void> {

  }
  async removeVisitorAttributes(options: { keys: string[] }): Promise<void> {

  } // iOS Only
  async trackEvent(options: { eventName: string }): Promise<void> {

  }
  async presentSurvey(options: { eventName: string }): Promise<{ surveryState: SurveyState }> {
    return { surveryState: SurveyState.Disabled };
  }
  async logout(): Promise<void> {

  }
}
