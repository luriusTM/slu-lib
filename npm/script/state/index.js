"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceMetadata = exports.LauncherHistory = void 0;
const index_js_1 = require("../handlers/index.js");
__exportStar(require("./theme.js"), exports);
__exportStar(require("./settings.js"), exports);
__exportStar(require("./weg_items.js"), exports);
__exportStar(require("./wm_layout.js"), exports);
__exportStar(require("./placeholder.js"), exports);
__exportStar(require("./settings_by_app.js"), exports);
__exportStar(require("./settings_by_monitor.js"), exports);
__exportStar(require("./icon_pack.js"), exports);
__exportStar(require("./plugin.js"), exports);
__exportStar(require("./widget.js"), exports);
__exportStar(require("./profile.js"), exports);
const _LauncherHistory = (0, index_js_1.Obtainable)(index_js_1.SeelenCommand.StateGetHistory, index_js_1.SeelenEvent.StateHistoryChanged);
class LauncherHistory {
    static async getAsync() {
        return await _LauncherHistory.getAsync();
    }
    static async onChange(cb) {
        return await _LauncherHistory.onChange(cb);
    }
}
exports.LauncherHistory = LauncherHistory;
class ResourceMetadata {
    displayName = 'Unknown';
    author = 'Unknown';
    description = '';
    filename = '';
    tags = [];
}
exports.ResourceMetadata = ResourceMetadata;
