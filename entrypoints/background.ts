import {portName} from "@/shared/constants";
import {useBackgroundServiceConnector} from "@/shared/hooks/useConnector.ts";


export default defineBackground(async () => {
    // Setup context
    useBackgroundServiceConnector(portName).then(handleBackgroundService);
});

function handleBackgroundService() {
}
