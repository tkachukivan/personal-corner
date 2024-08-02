import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

const isDev = process.env.NODE_ENV === 'development';

const config: Configuration = {
    mode: !isDev ? 'production' : 'development',
    entry: {
        app: './client/index.tsx',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../public'),
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                // `.swcrc` can be used to configure swc
                use: {
                    loader: 'swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                                tsx: true,
                                decorators: true,
                                dynamicImport: true,
                            },
                            target: 'es2021',
                            transform: {
                                react: {
                                    runtime: 'automatic',
                                    development: isDev,
                                },
                            },
                        },
                        module: {
                            type: 'nodenext',
                        },
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './client/index.html',
        }),
    ],
};

if (isDev) {
    // @ts-ignore
    config.devServer = {
        hot: true,
        historyApiFallback: true,
        port: 9000,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000',
            },
        ],
    };

    config.optimization = {
        minimize: false,
        sideEffects: true,
    };
}

export default config;
