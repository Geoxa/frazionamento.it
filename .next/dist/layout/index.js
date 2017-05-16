'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guioconnor/dev/frazionamento.it/layout/index.js';

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('main', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, children), _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};