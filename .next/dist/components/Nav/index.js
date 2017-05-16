'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _next = require('../../next.config');

var _next2 = _interopRequireDefault(_next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guioconnor/dev/frazionamento.it/components/Nav/index.js';


var routes = _next2.default.exportPathMap();

var menu = ['/', '/chi-siamo', '/servizi', '/casi', '/contatti', '/links'].map(function (ref) {
  return _react2.default.createElement('li', { key: ref, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_link2.default, { href: routes[ref].page, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, routes[ref].title)));
});

exports.default = function () {
  return _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, menu));
};