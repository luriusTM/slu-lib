// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { WsdItemSelectOption } from './WsdItemSelectOption.ts';
import type { WsdItemSelectSubtype } from './WsdItemSelectSubtype.ts';

export type WsdItemSelect = {
  /**
   * Unique key for this item, used to identify it in the settings
   */
  key: string;
  /**
   * Label for this item could start with the prefix `t::` for translation
   *
   * example: `t::obj.inner.translation_key`
   */
  label: string;
  /**
   * This setting could be set by monitor on the settings by monitor section.
   */
  allowSetByMonitor: boolean;
  /**
   * Keys of items to be set in order to enable this item.
   *
   * it uses js logic (!!value) to determine if the item is enabled
   */
  dependencies: Array<string>;
  default: string | null;
  subtype: WsdItemSelectSubtype;
  options: Array<WsdItemSelectOption>;
};
