import {Configuration} from "webpack";
import {BuildOptions} from "./types";
import {buildDevServer, buildLoaders, buildPlugins, buildResolvers} from "./builders";


export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const {paths,mode, isDev} = options
    return {
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.build,
            clean: true
        },
        mode: mode,
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(options)
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
