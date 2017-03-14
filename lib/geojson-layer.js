"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var uid_1 = require("./util/uid");
var GeoJSONLayer = (function (_super) {
    __extends(GeoJSONLayer, _super);
    function GeoJSONLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = _this.props.id || "geojson-" + uid_1.generateID();
        _this.source = __assign({ type: 'geojson' }, _this.props.sourceOptions, { data: _this.props.data });
        _this.layerIds = [];
        _this.createLayer = function (type) {
            var _a = _this, id = _a.id, layerIds = _a.layerIds;
            var before = _this.props.before;
            var map = _this.context.map;
            var layerId = id + "-" + type;
            layerIds.push(layerId);
            var paint = _this.props[type + "Paint"] || {};
            var layout = _this.props[type + "Layout"] || {};
            map.addLayer({
                id: layerId,
                source: id,
                type: type,
                paint: paint,
                layout: layout
            }, before);
        };
        return _this;
    }
    GeoJSONLayer.prototype.componentWillMount = function () {
        var _a = this, id = _a.id, source = _a.source;
        var map = this.context.map;
        map.addSource(id, source);
        this.createLayer('symbol');
        this.createLayer('line');
        this.createLayer('fill');
        this.createLayer('circle');
    };
    GeoJSONLayer.prototype.componentWillUnmount = function () {
        var _a = this, id = _a.id, layerIds = _a.layerIds;
        var map = this.context.map;
        map.removeSource(id);
        layerIds.forEach(function (lId) { return map.removeLayer(lId); });
    };
    GeoJSONLayer.prototype.componentWillReceiveProps = function (props) {
        var id = this.id;
        var data = this.props.data;
        var map = this.context.map;
        if (props.data !== data) {
            map.getSource(id).setData(props.data);
        }
    };
    GeoJSONLayer.prototype.render = function () {
        return null;
    };
    return GeoJSONLayer;
}(React.Component));
GeoJSONLayer.contextTypes = {
    map: React.PropTypes.object
};
exports.default = GeoJSONLayer;
//# sourceMappingURL=geojson-layer.js.map