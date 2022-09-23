const { name, version } = require("./package.json");
const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
    lowcode: './lowcode'
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        // noParse: true,
        npmInfo: {
          package: name,
          version,
        },
        lowcodeDir: 'lowcode',
        entryPath: 'src/index.tsx',
        engineScope: "@alilc",
        categories: ['常用','信息展示'],
        // extraAssets: [
        //   'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/assets-prod.json'
        // ],
        builtinAssets: [
          {
            "packages": [
              {
                "package": "moment",
                "version": "2.24.0",
                "urls": [
                  "https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js"
                ],
                "library": "moment"
              },
              {
                "package": "lodash",
                "library": "_",
                "urls": [
                  "https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js"
                ]
              },
              {
                "package": "iconfont-icons",
                "urls": "//at.alicdn.com/t/font_2369445_ukrtsovd92r.js"
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
                library: 'icons',
              },
              {
                package: 'antd',
                version: '4.23.2',
                urls: [
                  `//g.alicdn.com/code/lib/antd/4.23.2/antd.min.js`,
                  `//g.alicdn.com/code/lib/antd/4.23.2/antd.min.css`,
                ],
                library: 'antd',
              },
              {
                // https://www.jsdelivr.com/package/npm/@alifd/meet-react?path=dist
                "package": "alifdMeetReact",
                "version": "2.8.2",
                "urls": [
                  "https://cdn.jsdelivr.net/npm/@alifd/meet-react@2.8.2/dist/meet-react.min.js",
                  "https://cdn.jsdelivr.net/npm/@alifd/meet-react@2.8.2/dist/meet-react.min.css"
                ],
                "library": "alifdMeetReact"
              },
              {
                "package": "@alilc/lowcode-materials",
                "version": "1.0.3",
                "library": "AntdLowcode",
                "urls": [
                  "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/view.js",
                  "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/view.css"
                ],
                "editUrls": [
                  "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/view.js",
                  "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/view.css"
                ]
              }
            ],
            "components": [
              // {
              //   "exportName": "AlilcLowcodeMaterialsMeta",
              //   "npm": {
              //     "package": "@alilc/lowcode-materials",
              //     "version": "1.0.3"
              //   },
              //   "url": "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/meta.js",
              //   "urls": {
              //     "default": "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.3/build/antd-lowcode/meta.js"
              //   }
              // }
            ],
            "sort": {
              "groupList": [
                "精选组件",
                "原子组件"
              ],
              "categoryList": [
                "常用",
                "通用",
                "导航",
                "信息输入",
                "信息展示",
                "信息反馈"
              ]
            },
            "groupList": [
              "精选组件",
              "原子组件"
            ],
            "ignoreComponents": { "procomponents-lowcode-materials": ['ColorfulInput'] },
          }
        ],
      },
      // './plugins/compatible.build.js',
    ],
    // './plugins/before.start.load.js',
  ],
};
