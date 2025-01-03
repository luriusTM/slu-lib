// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { StyleValue } from './StyleValue.ts';

export type SettingsToolbarItem = {
  /**
   * Id to identify the item, should be unique.
   */
  id: string;
  /**
   * Content to display in the item.
   *
   * Should follow the [mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).
   *
   * ## Settings Item Scope
   * this module does no expand the scope of the item
   */
  template: string;
  /**
   * Content to display in tooltip of the item.
   *
   * Should follow the [mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).
   *
   * ## Settings Item Scope
   * this module does no expand the scope of the item
   */
  tooltip: string | null;
  /**
   * Badge will be displayed over the item, useful as notifications.
   *
   * Should follow the [mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).
   *
   * ## Settings Item Scope
   * this module does no expand the scope of the item
   */
  badge: string | null;
  /**
   * Deprecated use `onClickV2` instead.
   */
  onClick: string | null;
  /**
   * This code will be parsed and executed when the item is clicked.
   *
   * Should follow the [mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).
   *
   * ## Settings Item Scope
   * this module does no expand the scope of the item
   */
  onClickV2: string | null;
  /**
   * Styles to be added to the item. This follow the same interface of React's `style` prop.
   */
  style: { [key in string]?: StyleValue | null };
};
