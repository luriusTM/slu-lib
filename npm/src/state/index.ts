import { Obtainable, SeelenCommand, SeelenEvent } from '../handlers/index.js';

export * from './theme.js';
export * from './settings.js';
export * from './weg_items.js';
export * from './wm_layout.js';
export * from './placeholder.js';
export * from './settings_by_app.js';
export * from './settings_by_monitor.js';
export * from './icon_pack.js';
export * from './plugin.js';
export * from './widget.js';
export * from './profile.js';

const _LauncherHistory = Obtainable<LauncherHistory>(
  SeelenCommand.StateGetHistory,
  SeelenEvent.StateHistoryChanged,
);

export class LauncherHistory {
  [x: string]: string[];

  static async getAsync(): Promise<LauncherHistory> {
    return await _LauncherHistory.getAsync();
  }

  static async onChange(cb: (value: LauncherHistory) => void): Promise<() => void> {
    return await _LauncherHistory.onChange(cb);
  }
}

export class ResourceMetadata {
  displayName: string = 'Unknown';
  author: string = 'Unknown';
  description: string = '';
  filename: string = '';
  tags: string[] = [];
}
