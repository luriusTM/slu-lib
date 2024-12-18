import type { Theme } from '@seelen-ui/types';
import { SeelenCommand, SeelenEvent } from '../lib.ts';
import { List } from '../utils/List.ts';
import { createInstanceInvoker, createInstanceOnEvent } from '../utils/State.ts';

declare global {
  interface ArgsByCommand {
    [SeelenCommand.StateGetThemes]: null;
  }
  interface ReturnByCommand {
    [SeelenCommand.StateGetThemes]: Theme[];
  }
  interface PayloadByEvent {
    [SeelenEvent.StateThemesChanged]: Theme[];
  }
}

export class ThemeList extends List<Theme> {
  static readonly getAsync = createInstanceInvoker(this, SeelenCommand.StateGetWidgets);
  static readonly onChange = createInstanceOnEvent(this, SeelenEvent.StateWidgetsChanged);
}
