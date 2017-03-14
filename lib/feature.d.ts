/// <reference types="geojson" />
/// <reference types="react" />
import { Component } from 'react';
import * as GeoJSON from 'geojson';
export interface Props {
    coordinates: GeoJSON.Position;
    properties?: any;
    onClick?: Function;
    onHover?: Function;
    onEndHover?: Function;
}
declare class Feature extends Component<Props, void> {
    render(): null;
}
export default Feature;
