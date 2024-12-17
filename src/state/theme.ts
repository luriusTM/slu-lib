import { SeelenCommand, SeelenEvent } from '../lib.ts';
import { List } from '../utils/List.ts';
import { TauriCommand, WebviewEvent } from '../utils/State.ts';
import type { WidgetId } from './mod.ts';

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

export interface ThemeInfo {
  /** Display name of the theme */
  displayName: string;
  /** Author of the theme */
  author: string;
  /** Description of the theme */
  description: string;
  /** Filename of the theme, is overridden by the program on load */
  filename: string;
  /** Tags to be used in search */
  tags: string[];
}

export interface Theme {
  /** Metadata about the theme */
  info: ThemeInfo;
  /** Css Styles of the theme */
  styles: Record<WidgetId, string>;
}

@TauriCommand(SeelenCommand.StateGetWidgets)
@WebviewEvent(SeelenEvent.StateWidgetsChanged)
export class ThemeList extends List<Theme> {
  static readonly getAsync: TauriCommand<ThemeList>;
  static readonly onChange: WebviewEvent<ThemeList>;
}
