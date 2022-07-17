var json = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    node: {
      setImmediate: false,
      module: 'empty',
      dns: 'mock',
      http2: 'empty',
      process: 'mock',
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    },
    output: {
      path: '/Users/gt/Desktop/umi-demo/dist',
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '/',
      pathinfo: true,
      futureEmitAssets: true
    },
    resolve: {
      symlinks: true,
      alias: {
        'react-router': '/Users/gt/Desktop/umi-demo/node_modules/react-router',
        'react-router-dom': '/Users/gt/Desktop/umi-demo/node_modules/react-router-dom',
        history: '/Users/gt/Desktop/umi-demo/node_modules/history-with-query',
        'regenerator-runtime': '/Users/gt/Desktop/umi-demo/node_modules/umi/node_modules/regenerator-runtime',
        react: '/Users/gt/Desktop/umi-demo/node_modules/react',
        'react-dom': '/Users/gt/Desktop/umi-demo/node_modules/react-dom',
        antd: '/Users/gt/Desktop/umi-demo/node_modules/antd',
        'antd-mobile': '/Users/gt/Desktop/umi-demo/node_modules/antd-mobile',
        dva: '/Users/gt/Desktop/umi-demo/node_modules/dva',
        '@': '/Users/gt/Desktop/umi-demo/src',
        '@@': '/Users/gt/Desktop/umi-demo/src/.umi',
        '@umijs/plugin-request/lib/ui': '/Users/gt/Desktop/umi-demo/node_modules/@umijs/plugin-request/lib/ui/index.js',
        umi: '/Users/gt/Desktop/umi-demo/node_modules/umi'
      },
      extensions: [
        '.web.js',  '.wasm',
        '.mjs',     '.js',
        '.web.jsx', '.jsx',
        '.web.ts',  '.ts',
        '.web.tsx', '.tsx',
        '.json'
      ],
      modules: [
        'node_modules',
        '/Users/gt/Desktop/umi-demo/node_modules/@umijs/bundler-webpack/node_modules'
      ]
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: [ [ '/Users/gt/Desktop/umi-demo' ] ],
          exclude: [ /node_modules/, /\.mfsu/ ],
          use: [
            {
              loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/babel-loader/index.js',
              options: {
                sourceType: 'unambiguous',
                babelrc: false,
                cacheDirectory: '/Users/gt/Desktop/umi-demo/src/.umi/.cache/babel-loader',
                presets: [
                  [
                    '/Users/gt/Desktop/umi-demo/node_modules/@umijs/babel-preset-umi/app.js',
                    {
                      nodeEnv: 'development',
                      dynamicImportNode: true,
                      autoCSSModules: true,
                      svgr: true,
                      env: {
                        targets: {
                          chrome: 49,
                          firefox: 64,
                          safari: 10,
                          edge: 13,
                          ios: 10
                        }
                      },
                      import: [
                        {
                          libraryName: 'antd',
                          libraryDirectory: 'es',
                          style: true
                        },
                        {
                          libraryName: 'antd-mobile',
                          libraryDirectory: 'es',
                          style: true
                        }
                      ],
                      reactRequire: false,
                      react: { runtime: 'automatic' }
                    }
                  ]
                ],
                plugins: []
              }
            }
          ]
        },
        {
          test: /\.(jsx|ts|tsx)$/,
          include: [ /node_modules/ ],
          use: [
            {
              loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/babel-loader/index.js',
              options: {
                sourceType: 'unambiguous',
                babelrc: false,
                cacheDirectory: '/Users/gt/Desktop/umi-demo/src/.umi/.cache/babel-loader',
                presets: [
                  [
                    '/Users/gt/Desktop/umi-demo/node_modules/@umijs/babel-preset-umi/app.js',
                    {
                      nodeEnv: 'development',
                      dynamicImportNode: true,
                      autoCSSModules: true,
                      svgr: true,
                      env: {
                        targets: {
                          chrome: 49,
                          firefox: 64,
                          safari: 10,
                          edge: 13,
                          ios: 10
                        }
                      },
                      import: [
                        {
                          libraryName: 'antd',
                          libraryDirectory: 'es',
                          style: true
                        },
                        {
                          libraryName: 'antd-mobile',
                          libraryDirectory: 'es',
                          style: true
                        }
                      ],
                      reactRequire: false,
                      react: { runtime: 'automatic' }
                    }
                  ]
                ],
                plugins: []
              }
            }
          ]
        },
        {
          test: /\.(js|mjs)$/,
          include: [ [Function (anonymous)] ],
          use: [
            {
              loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/babel-loader/index.js',
              options: {
                sourceType: 'unambiguous',
                babelrc: false,
                cacheDirectory: '/Users/gt/Desktop/umi-demo/src/.umi/.cache/babel-loader',
                presets: [
                  [
                    '/Users/gt/Desktop/umi-demo/node_modules/@umijs/babel-preset-umi/dependency.js',
                    { nodeEnv: 'development', dynamicImportNode: true }
                  ]
                ]
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|webp|ico)(\?.*)?$/,
          use: [
            {
              loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/url-loader/cjs.js',
              options: {
                limit: 10000,
                name: 'static/[name].[hash:8].[ext]',
                esModule: false,
                fallback: {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/file-loader/cjs.js',
                  options: {
                    name: 'static/[name].[hash:8].[ext]',
                    esModule: false
                  }
                }
              }
            }
          ]
        },
        {
          test: /\.(avif)(\?.*)?$/,
          use: [
            {
              loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/file-loader/cjs.js',
              options: { name: 'static/[name].[hash:8].[ext]', esModule: false }
            }
          ]
        },
        {
          test: /\.(svg)(\?.*)?$/,
          use: [
            {
              loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/file-loader/cjs.js',
              options: { name: 'static/[name].[hash:8].[ext]', esModule: false }
            }
          ]
        },
        {
          test: /\.(eot|woff|woff2|ttf)(\?.*)?$/,
          use: [
            {
              loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/file-loader/cjs.js',
              options: { name: 'static/[name].[hash:8].[ext]', esModule: false }
            }
          ]
        },
        {
          test: /\.(txt|text|md)$/,
          use: [
            {
              loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/raw-loader/cjs.js'
            }
          ]
        },
        {
          test: /\.(css)(\?.*)?$/,
          oneOf: [
            {
              resourceQuery: /modules/,
              use: [
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/bundler-webpack/lib/webpack/plugins/mini-css-extract-plugin/src/loader.js',
                  options: { publicPath: './', hmr: true }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/css-loader/cjs.js',
                  options: {
                    importLoaders: 1,
                    modules: { localIdentName: '[local]___[hash:base64:5]' }
                  }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/postcss-loader/src/index.js',
                  options: { ident: 'postcss', plugins: [Function: plugins] }
                }
              ]
            },
            {
              use: [
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/bundler-webpack/lib/webpack/plugins/mini-css-extract-plugin/src/loader.js',
                  options: { publicPath: './', hmr: true }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/css-loader/cjs.js',
                  options: { importLoaders: 1 }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/postcss-loader/src/index.js',
                  options: { ident: 'postcss', plugins: [Function: plugins] }
                }
              ]
            }
          ]
        },
        {
          test: /\.(less)(\?.*)?$/,
          oneOf: [
            {
              resourceQuery: /modules/,
              use: [
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/bundler-webpack/lib/webpack/plugins/mini-css-extract-plugin/src/loader.js',
                  options: { publicPath: './', hmr: true }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/css-loader/cjs.js',
                  options: {
                    importLoaders: 1,
                    modules: { localIdentName: '[local]___[hash:base64:5]' }
                  }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/postcss-loader/src/index.js',
                  options: { ident: 'postcss', plugins: [Function: plugins] }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/less-loader/cjs.js',
                  options: {
                    modifyVars: { 'root-entry-name': 'default' },
                    javascriptEnabled: true
                  }
                }
              ]
            },
            {
              use: [
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/bundler-webpack/lib/webpack/plugins/mini-css-extract-plugin/src/loader.js',
                  options: { publicPath: './', hmr: true }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/css-loader/cjs.js',
                  options: { importLoaders: 1 }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/postcss-loader/src/index.js',
                  options: { ident: 'postcss', plugins: [Function: plugins] }
                },
                {
                  loader: '/Users/gt/Desktop/umi-demo/node_modules/@umijs/deps/compiled/less-loader/cjs.js',
                  options: {
                    modifyVars: { 'root-entry-name': 'default' },
                    javascriptEnabled: true
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    plugins: [
      MiniCssExtractPlugin {
        options: {
          filename: '[name].css',
          moduleFilename: [Function: moduleFilename],
          ignoreOrder: true,
          chunkFilename: '[name].chunk.css'
        }
      },
      DefinePlugin { definitions: { 'process.env': {} } },
      WebpackBarPlugin {
        profile: false,
        handler: [Function (anonymous)],
        modulesCount: 500,
        showEntries: false,
        showModules: true,
        showActiveModules: true,
        options: {
          name: 'webpack',
          color: 'green',
          reporters: [ 'fancy' ],
          reporter: null
        },
        reporters: [ FancyReporter {} ]
      },
      FriendlyErrorsWebpackPlugin {
        compilationSuccessInfo: {},
        onErrors: undefined,
        shouldClearConsole: false,
        formatters: [ [Function: format], [Function: format], [Function: format] ],
        transformers: [
          [Function: transform],
          [Function: transform],
          [Function: transform]
        ]
      },
      HotModuleReplacementPlugin {
        options: {},
        multiStep: undefined,
        fullBuildTimeout: 200,
        requestTimeout: 10000
      }
    ],
    entry: { umi: [ '/Users/gt/Desktop/umi-demo/src/.umi/umi.ts' ] }
  }