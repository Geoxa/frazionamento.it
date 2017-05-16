
          window.__NEXT_REGISTER_PAGE('/contatti', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/guioconnor/dev/frazionamento.it/components/Footer/index.js";

exports.default = function () {
  return _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    }
  }, "footer stuff");
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/guioconnor/dev/frazionamento.it/components/Footer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/guioconnor/dev/frazionamento.it/components/Footer/index.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(562);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guioconnor/dev/frazionamento.it/components/Header/index.js';

exports.default = function () {
  return _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, 'header stuff', _react2.default.createElement(_Nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/guioconnor/dev/frazionamento.it/components/Header/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/guioconnor/dev/frazionamento.it/components/Header/index.js"); } } })();

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(570);

var _link2 = _interopRequireDefault(_link);

var _next = __webpack_require__(564);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/guioconnor/dev/frazionamento.it/components/Nav/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/guioconnor/dev/frazionamento.it/components/Nav/index.js"); } } })();

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(561);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(560);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/guioconnor/dev/frazionamento.it/layout/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/guioconnor/dev/frazionamento.it/layout/index.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.exportPathMap = function () {
  return {
    '/': { page: '/', title: 'Home' },
    '/chi-siamo': { page: '/chi-siamo', title: 'Chi Siamo' },
    '/servizi': { page: '/servizi', title: 'Servizi' },
    '/casi': { page: '/casi', title: 'Casi' },
    '/contatti': { page: '/contatti', title: 'Contatti' },
    '/links': { page: '/links', title: 'Links' }
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/guioconnor/dev/frazionamento.it/next.config.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/guioconnor/dev/frazionamento.it/next.config.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _googleMapReact = __webpack_require__(588);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _layout = __webpack_require__(563);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/guioconnor/dev/frazionamento.it/pages/contatti/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/guioconnor/dev/frazionamento.it/pages/contatti/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/contatti")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(575);


/***/ })

},[576]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9jb250YXR0aS9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzPzkwM2YzN2QiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/OTAzZjM3ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9pbmRleC5qcz85MDNmMzdkIiwid2VicGFjazovLy8uL2xheW91dC9pbmRleC5qcz85MDNmMzdkIiwid2VicGFjazovLy8uL25leHQuY29uZmlnLmpzPzkwM2YzN2QiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGF0dGk/OTAzZjM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiA8c3Bhbj5mb290ZXIgc3R1ZmY8L3NwYW4+O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzIiwiaW1wb3J0IE5hdiBmcm9tICcuLi9OYXYnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgaGVhZGVyIHN0dWZmXG4gICAgPE5hdiAvPlxuICA8L2hlYWRlcj5cbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBuZXh0Q29uZmlnIGZyb20gJy4uLy4uL25leHQuY29uZmlnJztcblxuY29uc3Qgcm91dGVzID0gbmV4dENvbmZpZy5leHBvcnRQYXRoTWFwKCk7XG5cbmNvbnN0IG1lbnUgPSBbXG4gICcvJyxcbiAgJy9jaGktc2lhbW8nLFxuICAnL3NlcnZpemknLFxuICAnL2Nhc2knLFxuICAnL2NvbnRhdHRpJyxcbiAgJy9saW5rcycsXG5dLm1hcCgocmVmKSA9PiAoXG4gIDxsaSBrZXk9e3JlZn0+XG4gICAgPExpbmsgaHJlZj17cm91dGVzW3JlZl0ucGFnZX0+XG4gICAgICA8YT57cm91dGVzW3JlZl0udGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgPC9saT5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPHVsPnttZW51fTwvdWw+XG4gIDwvbmF2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkZXIgLz5cbiAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGF5b3V0L2luZGV4LmpzIiwiZXhwb3J0cy5leHBvcnRQYXRoTWFwID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgICcvJzogeyBwYWdlOiAnLycsIHRpdGxlOiAnSG9tZSd9LFxuICAgICcvY2hpLXNpYW1vJzogeyBwYWdlOiAnL2NoaS1zaWFtbycsIHRpdGxlOiAnQ2hpIFNpYW1vJ30sXG4gICAgJy9zZXJ2aXppJzogeyBwYWdlOiAnL3NlcnZpemknLCB0aXRsZTogJ1NlcnZpemknfSxcbiAgICAnL2Nhc2knOiB7IHBhZ2U6ICcvY2FzaScsIHRpdGxlOiAnQ2FzaSd9LFxuICAgICcvY29udGF0dGknOiB7IHBhZ2U6ICcvY29udGF0dGknLCB0aXRsZTogJ0NvbnRhdHRpJ30sXG4gICAgJy9saW5rcyc6IHsgcGFnZTogJy9saW5rcycsIHRpdGxlOiAnTGlua3MnfSxcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25leHQuY29uZmlnLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0JztcblxuY29uc3QgaW5saW5lU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBiYWNrZ3JvdW5kOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcbiAgYm9yZGVyUmFkaXVzOiAzLFxuICBjb2xvcjogJ3JnYigwLCAwLCAwKScsXG4gIHdpZHRoOiA4NSxcbiAgcGFkZGluZzogMTAsXG59XG5cbmNvbnN0IEJ1c2luZXNzUGluID0gKHsgbmFtZSwgYWRkcmVzcywgY2l0eSwgUGhvbmUsIGVtYWlsIH0pID0+IChcbiAgPGRpdiBzdHlsZT17aW5saW5lU3R5bGV9PlxuICAgIHtuYW1lfTxiciAvPlxuICAgIHthZGRyZXNzfTxiciAvPlxuICAgIHtjaXR5fTxiciAvPlxuICAgIHtQaG9uZX08YnIgLz5cbiAgICB7ZW1haWx9PGJyIC8+XG4gIDwvZGl2Pik7XG4gXG5jbGFzcyBTaW1wbGVNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjoge2xhdDogNDYuMDUyMTY5OSwgbG5nOiAxMS40MDkyNTA2fSxcbiAgICB6b29tOiAxMVxuICB9O1xuIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc0MDBweCd9fT5cbiAgICAgICAgICA8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3RoaXMucHJvcHMuY2VudGVyfVxuICAgICAgICAgICAgZGVmYXVsdFpvb209e3RoaXMucHJvcHMuem9vbX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QnVzaW5lc3NQaW5cbiAgICAgICAgICAgICAgbGF0PXs0Ni4wNTIxNjk5fVxuICAgICAgICAgICAgICBsbmc9ezExLjQwOTI1MDZ9XG4gICAgICAgICAgICAgIG5hbWU9XCJGcmF6aW9uYW1lbnRvLml0XCJcbiAgICAgICAgICAgICAgYWRkcmVzcz1cIlZpYSBBLlBvbGEgbi4zIDM4MDUwXCJcbiAgICAgICAgICAgICAgY2l0eT1cIlJvbmNlZ25vIFRlcm1lIChUTilcIlxuICAgICAgICAgICAgICBQaG9uZT1cIiszOS4wNDYxLjUyNTM4OFwiXG4gICAgICAgICAgICAgIGVtYWlsPVwiaW5mb0BmcmF6aW9uYW1lbnRvLml0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZU1hcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb250YXR0aT9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUEE7QUFhQTtBQWJBO0FBQ0E7Ozs7O0FBZkE7QUFDQTtBQURBO0FBRUE7QUE0QkE7QUE1QkE7QUFDQTtBQTJCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        