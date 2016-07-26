"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var _GoogleMapLoader = require("./GoogleMapLoader");

var _GoogleMapLoader2 = _interopRequireDefault(_GoogleMapLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var USE_NEW_BEHAVIOR_TAG_NAME = "__new_behavior__";

var GoogleMap = function (_Component) {
  (0, _inherits3.default)(GoogleMap, _Component);

  function GoogleMap() {
    (0, _classCallCheck3.default)(this, GoogleMap);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GoogleMap).apply(this, arguments));
  }

  (0, _createClass3.default)(GoogleMap, [{
    key: "getBounds",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getBounds() {
      return (this.props.map || this.refs.delegate).getBounds();
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return (this.props.map || this.refs.delegate).getCenter();
    }
  }, {
    key: "getDiv",
    value: function getDiv() {
      return (this.props.map || this.refs.delegate).getDiv();
    }
  }, {
    key: "getHeading",
    value: function getHeading() {
      return (this.props.map || this.refs.delegate).getHeading();
    }
  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      return (this.props.map || this.refs.delegate).getMapTypeId();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return (this.props.map || this.refs.delegate).getProjection();
    }
  }, {
    key: "getStreetView",
    value: function getStreetView() {
      return (this.props.map || this.refs.delegate).getStreetView();
    }
  }, {
    key: "getTilt",
    value: function getTilt() {
      return (this.props.map || this.refs.delegate).getTilt();
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return (this.props.map || this.refs.delegate).getZoom();
    }
    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // Public APIs - Use this carefully
    // See discussion in https://github.com/tomchentw/react-google-maps/issues/62
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return !it.match(/^get/) && !it.match(/^set/) && !it.match(/Map$/); })

  }, {
    key: "fitBounds",
    value: function fitBounds(bounds) {
      return (this.props.map || this.refs.delegate).fitBounds(bounds);
    }
  }, {
    key: "panBy",
    value: function panBy(x, y) {
      return (this.props.map || this.refs.delegate).panBy(x, y);
    }
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      return (this.props.map || this.refs.delegate).panTo(latLng);
    }
  }, {
    key: "panToBounds",
    value: function panToBounds(latLngBounds) {
      return (this.props.map || this.refs.delegate).panToBounds(latLngBounds);
    }
    // END - Public APIs - Use this carefully
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var containerTagName = this.props.containerTagName;

      var isUsingNewBehavior = USE_NEW_BEHAVIOR_TAG_NAME === containerTagName;

      (0, _warning2.default)(isUsingNewBehavior, "\"GoogleMap\" with containerTagName is deprecated now and will be removed in\n next major release (5.0.0). Use \"GoogleMapLoader\" instead.\nSee https://github.com/tomchentw/react-google-maps/pull/157 for more details.");
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var containerTagName = _props.containerTagName;
      var _props$containerProps = _props.containerProps;
      var containerProps = _props$containerProps === undefined ? {} : _props$containerProps;
      var children = _props.children;
      var mapProps = (0, _objectWithoutProperties3.default)(_props, ["containerTagName", "containerProps", "children"]);

      var isUsingNewBehavior = USE_NEW_BEHAVIOR_TAG_NAME === containerTagName;

      if (isUsingNewBehavior) {
        return _react2.default.createElement(
          _GoogleMapHolder2.default,
          mapProps,
          children
        );
      } else {
        // ------------ Deprecated ------------
        var realContainerTagName = containerTagName === undefined || containerTagName === null ? "div" : containerTagName;

        return _react2.default.createElement(_GoogleMapLoader2.default, {
          ref: "loader",
          containerElement: _react2.default.createElement(realContainerTagName, containerProps),
          googleMapElement: _react2.default.createElement(
            GoogleMap,
            (0, _extends3.default)({ ref: "delegate", containerTagName: USE_NEW_BEHAVIOR_TAG_NAME }, mapProps),
            children
          )
        });
      }
    }
  }]);
  return GoogleMap;
}(_react.Component);

GoogleMap.propTypes = (0, _extends3.default)({
  containerTagName: _react.PropTypes.string,
  containerProps: _react.PropTypes.object,
  map: _react.PropTypes.object
}, _GoogleMapHolder.mapDefaultPropTypes, _GoogleMapHolder.mapControlledPropTypes, _GoogleMapHolder.mapEventPropTypes);
exports.default = GoogleMap;