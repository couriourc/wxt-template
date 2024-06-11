import {defineConfig, presetUno, presetWind, transformerDirectives} from "unocss";


/* For Unocss  */
export default defineConfig({
    presets: [
        presetUno(),
        presetWind(),
    ],
    transformers: [
        transformerDirectives(),
    ],

});
