import {browser} from "wxt/browser";

export interface ISettingsOption {
    theme: 'light' | 'dark' | 'auto';
}

export type UserEventType = MouseEvent | TouchEvent | PointerEvent;
export type Port = ReturnType<typeof browser.runtime.connect>
