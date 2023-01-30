import {resolve} from 'path'
import {buildWebpackConfig} from './config/build/buildConfig'
import {BuildEnv} from "./config/build/types";


export default (env : BuildEnv) => {

    const mode = env.mode || 'development'
    const PORT = env.port || 6868
    const isDev = mode === 'development'

    const paths = {
        entry: resolve(__dirname, 'src', 'index.tsx'),
        build: resolve(__dirname, 'build'),
        html: resolve(__dirname, 'public', 'index.html'),
        src: resolve(__dirname, 'src')
    }

    return buildWebpackConfig({
        mode,
        paths,
        port: PORT,
        isDev
    })
}
