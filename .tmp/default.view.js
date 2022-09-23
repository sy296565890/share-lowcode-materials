

export { default } from '/home/lc/lc/share-lowcode-materials/src/index.tsx';

import * as componentInstances from '/home/lc/lc/share-lowcode-materials/src/index.tsx';

import '/home/lc/lc/share-lowcode-materials/src/index.scss'

export * from '/home/lc/lc/share-lowcode-materials/src/index.tsx';

const coveredComponents = {};

const library = 'BizComps';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}