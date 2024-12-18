// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { JsonValue } from './serde_json/JsonValue.ts';
import type { PluginId } from './PluginId.ts';
import type { WidgetId } from './WidgetId.ts';

export type Plugin = { id: PluginId; icon: string; target: WidgetId; plugin: JsonValue; bundled: boolean };