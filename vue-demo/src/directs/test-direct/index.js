import TestDirect from "./test-direct";

TestDirect.install = function installShadeColor(Vue) {
  Vue.directive(TestDirect.name, TestDirect);
};

export { TestDirect };
