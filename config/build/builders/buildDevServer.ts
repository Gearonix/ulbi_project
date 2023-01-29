import {Configuration as DevServerConfig} from "webpack-dev-server";
import {BuildOptions} from "../types";

export const buildDevServer = ({port}: BuildOptions): DevServerConfig => {
    return {
        port,
        open: true,
        historyApiFallback: true
    }
}
