'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _layout = require('../../layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guioconnor/dev/frazionamento.it/pages/contatti/index.js?entry';


var inlineStyle = {
  position: 'relative',
  background: 'rgb(255, 255, 255)',
  borderRadius: 3,
  color: 'rgb(0, 0, 0)',
  width: 85,
  padding: 10
};

var BusinessPin = function BusinessPin(_ref) {
  var name = _ref.name,
      address = _ref.address,
      city = _ref.city,
      Phone = _ref.Phone,
      email = _ref.email;
  return _react2.default.createElement('div', { style: inlineStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, name, _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), address, _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), city, _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), Phone, _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), email, _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }));
};

var SimpleMap = function (_Component) {
  (0, _inherits3.default)(SimpleMap, _Component);

  function SimpleMap() {
    (0, _classCallCheck3.default)(this, SimpleMap);

    return (0, _possibleConstructorReturn3.default)(this, (SimpleMap.__proto__ || (0, _getPrototypeOf2.default)(SimpleMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleMap, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('div', { style: { width: '100%', height: '400px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_googleMapReact2.default, {
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(BusinessPin, {
        lat: 46.0521699,
        lng: 11.4092506,
        name: 'Frazionamento.it',
        address: 'Via A.Pola n.3 38050',
        city: 'Roncegno Terme (TN)',
        Phone: '+39.0461.525388',
        email: 'info@frazionamento.it',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }))));
    }
  }]);

  return SimpleMap;
}(_react.Component);

SimpleMap.defaultProps = {
  center: { lat: 46.0521699, lng: 11.4092506 },
  zoom: 11
};

exports.default = SimpleMap;