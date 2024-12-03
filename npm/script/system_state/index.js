"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIColors = void 0;
const index_js_1 = require("../handlers/index.js");
class UIColors extends (0, index_js_1.Obtainable)(index_js_1.SeelenCommand.GetSystemColors, index_js_1.SeelenEvent.ColorsChanged) {
    static default() {
        return {
            background: '#ffffff',
            foreground: '#000000',
            accent_darkest: '#990000',
            accent_darker: '#aa0000',
            accent_dark: '#bb0000',
            accent: '#cc0000',
            accent_light: '#dd0000',
            accent_lighter: '#ee0000',
            accent_lightest: '#ff0000',
            complement: null,
        };
    }
    static setAssCssVariables(colors) {
        for (const [key, value] of Object.entries(colors)) {
            if (typeof value !== 'string') {
                continue;
            }
            const hex = value.replace('#', '').slice(0, 6);
            const color = parseInt(hex, 16);
            const r = (color >> 16) & 255;
            const g = (color >> 8) & 255;
            const b = color & 255;
            // replace rust snake case with kebab case
            const name = key.replace('_', '-');
            document.documentElement.style.setProperty(`--config-${name}-color`, value.slice(0, 7));
            document.documentElement.style.setProperty(`--config-${name}-color-rgb`, `${r}, ${g}, ${b}`);
        }
    }
}
exports.UIColors = UIColors;
