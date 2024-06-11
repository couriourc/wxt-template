//@ts-ignore
import {createParser} from 'eventsource-parser';
import {browser} from "wxt/browser";
import EN from "@/public/_locales/en/messages.json";

export const $t = (message: keyof typeof EN) => browser.i18n.getMessage(message as any);


