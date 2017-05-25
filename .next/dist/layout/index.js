'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Twitter = require('../components/Twitter');

var _Twitter2 = _interopRequireDefault(_Twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guioconnor/dev/frazionamento.it/layout/index.js';

exports.default = function (_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement('div', {
    itemscope: true,
    itemtype: 'http://schema.org/LocalBusiness',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('link', { rel: 'preload', href: '/_next/-/page/contatti', as: 'script', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', { rel: 'preload', href: '/_next/-/page/_error/index.js', as: 'script', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'preload', href: '/_next/-/manifest.js', as: 'script', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('link', { rel: 'preload', href: '/_next/-/commons.js', as: 'script', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('link', { rel: 'preload', href: '/_next/-/main.js', as: 'script', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('meta', { charset: 'utf-8', 'class': 'next-head', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/styles.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('div', { id: 'content', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('main', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, title), children), _react2.default.createElement('aside', { id: 'sidebar', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_Twitter2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }))), _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }));
};