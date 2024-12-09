import { invoke, SeelenCommand } from '../handlers/index.ts';
import type { Placeholder } from './placeholder.ts';

export interface ProfileSettings {
  themes: string[];
}

export interface Profile {
  name: string;
  toolbarLayour: Placeholder;
  settings: ProfileSettings;
}

export class ProfileList {
  private constructor(private inner: Profile[]) {}

  static async getAsync(): Promise<ProfileList> {
    return new ProfileList(await invoke(SeelenCommand.StateGetProfiles));
  }

  toArray(): Profile[] {
    return this.inner;
  }
}
