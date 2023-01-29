import {RuleSetRule} from "webpack"
import {loader as MiniCssLoader} from "mini-css-extract-plugin";
import {BuildOptions} from "../types";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use : 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                options.isDev ? 'style-loader' : MiniCssLoader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (filename: string) => !!filename.includes('.module.'),
                            localIdentName: options.isDev  ? '[name]__[local]' : '[hash:base64:8]'
                        }
                    }
                },
                "sass-loader",
            ],
    }

    return [
        typescriptLoader,
        scssLoader
    ]
}
