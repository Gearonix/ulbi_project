import HTMLWebpackPlugin from 'html-webpack-plugin'
import {DefinePlugin, ProgressPlugin, WebpackPluginInstance} from 'webpack'
import {BuildOptions} from "../types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {CleanWebpackPlugin} from 'clean-webpack-plugin'

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({template: options.paths.html}),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            protectWebpackAssets: false,
            cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
        }),
        new DefinePlugin({
            __isDev__: JSON.stringify(options.isDev)
        })
    ]
}
