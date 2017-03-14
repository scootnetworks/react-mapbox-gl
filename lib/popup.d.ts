/// <reference types="geojson" />
/// <reference types="react" />
import * as React from 'react';
import { Anchor } from './util/overlays';
import * as GeoJSON from 'geojson';
export interface Props {
    coordinates: GeoJSON.Position;
    anchor?: Anchor;
    offset?: any;
    children?: JSX.Element;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    style?: React.CSSProperties;
    className?: string;
}
export default class Popup extends React.Component<Props, void> {
    static defaultProps: {
        anchor: string;
    };
    render(): JSX.Element;
}
