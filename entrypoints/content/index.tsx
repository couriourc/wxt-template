import 'uno.css';
import "@/assets/styles/style.less";
import {portName} from "@/shared/constants";
import {MessagePool} from "@/shared/design-pattern/Singleton.ts";
import {browser} from "wxt/browser";


export default defineContentScript({
    matches: ['<all_urls>'],
    runAt: "document_end",
    cssInjectionMode: "ui",
    world: "ISOLATED",
    async main(e) {
        /*@REMEMBER ME*/
        const port = browser.runtime.connect({
            name: portName,
        });
        MessagePool.set(port);
    },

});

