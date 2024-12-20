// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export type PinnedWegItemData = {
  /**
   * Direct path to file, forder or program.
   *
   * PWA: In case of pwa programs this will be the creator of the process, will point to the
   * browser executable so this is not unique across PWA apps, and can't be used to identify apps.
   * Also this can't be used to launch the app.
   *
   * UWP: In case of UWP apps this will be the path to the app executable, but this can't be used to
   * invoke the app instead should be used the `shell:AppsFolder` + app user model id.
   */
  path: string;
  /**
   * Program, file or folder to execute/open when clicking the item.
   *
   * Exclusion: On `.lnk` files this is the target of the link and when open action is triggered,
   * this field and arguments are ignored, using the link file as command.
   *
   * Important: This should be unique across all weg items because this is used as identifier, dupes will be removed on load.
   *
   * Note: this field is mandatory and will be filled with `path` if it is not set
   */
  execution_command: string;
  /**
   * true if self.path is a folder
   */
  is_dir: boolean;
};
