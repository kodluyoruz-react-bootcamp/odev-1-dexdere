"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _servicejs = require('./lib/service.js'); var _servicejs2 = _interopRequireDefault(_servicejs);

const data = _servicejs2.default.call(void 0, 1);

data.then((result) => console.log(result));