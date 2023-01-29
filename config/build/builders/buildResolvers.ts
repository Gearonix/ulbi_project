import {ResolveOptions} from "webpack";


export const buildResolvers = (): ResolveOptions => {
    return {
        extensions: ['.scss','.tsx', '.ts', '.js']
    }
}
