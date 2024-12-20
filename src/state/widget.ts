import type { Widget } from '@seelen-ui/types';
import { SeelenCommand, SeelenEvent } from '../lib.ts';
import { List } from '../utils/List.ts';
import { createInstanceInvoker, createInstanceOnEvent } from '../utils/State.ts';

declare global {
  interface ArgsByCommand {
    [SeelenCommand.StateGetWidgets]: null;
  }
  interface ReturnByCommand {
    [SeelenCommand.StateGetWidgets]: Widget[];
  }
  interface PayloadByEvent {
    [SeelenEvent.StateWidgetsChanged]: Widget[];
  }
}

export class WidgetList extends List<Widget> {
  static readonly getAsync = createInstanceInvoker(this, SeelenCommand.StateGetWidgets);
  static readonly onChange = createInstanceOnEvent(this, SeelenEvent.StateWidgetsChanged);
}
