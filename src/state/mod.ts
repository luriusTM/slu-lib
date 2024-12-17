import { SeelenCommand, SeelenEvent } from '../handlers/mod.ts';
import { TauriCommand, WebviewEvent } from '../utils/State.ts';

export * from './theme.ts';
export * from './settings.ts';
export * from './weg_items.ts';
export * from './wm_layout.ts';
export * from './placeholder.ts';
export * from './settings_by_app.ts';
export * from './settings_by_monitor.ts';
export * from './icon_pack.ts';
export * from './plugin.ts';
export * from './widget.ts';
export * from './profile.ts';

declare global {
  interface ArgsByCommand {
    [SeelenCommand.StateGetHistory]: null;
  }
  interface ReturnByCommand {
    [SeelenCommand.StateGetHistory]: ILauncherHistory;
  }
  interface PayloadByEvent {
    [SeelenEvent.StateHistoryChanged]: ILauncherHistory;
  }
}

interface ILauncherHistory {
  [x: string]: string[];
}

@TauriCommand(SeelenCommand.StateGetHistory)
@WebviewEvent(SeelenEvent.StateHistoryChanged)
export class LauncherHistory {
  constructor(public inner: ILauncherHistory) {}
  static readonly getAsync: TauriCommand<LauncherHistory>;
  static readonly onChange: WebviewEvent<LauncherHistory>;
}

export class ResourceMetadata {
  displayName: string = 'Unknown';
  author: string = 'Unknown';
  description: string = '';
  filename: string = '';
  tags: string[] = [];
}
