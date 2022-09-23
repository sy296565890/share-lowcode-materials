
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const AntdProFormConditionMeta: ComponentMetadata = {
  "componentName": "AntdProFormCondition",
  "title": "AntdProFormCondition",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "share-lowcode-materials",
    "version": "0.1.0",
    "exportName": "AntdProFormCondition",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "hello",
            "zh-CN": "hello"
          }
        },
        "name": "hello",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "AntdProFormCondition",
    "screenshot": "",
    "schema": {
      "componentName": "AntdProFormCondition",
      "props": {}
    }
  }
];

export default {
  ...AntdProFormConditionMeta,
  snippets
};
