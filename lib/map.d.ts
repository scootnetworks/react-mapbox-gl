/// <reference types="mapbox-gl" />
/// <reference types="react" />
import * as MapboxGl from 'mapbox-gl/dist/mapbox-gl';
import * as React from 'react';
export declare type MapEvent = (map: MapboxGl.Map, evt: React.SyntheticEvent<any>) => void;
export interface Events {
    onStyleLoad?: MapEvent;
    onResize?: MapEvent;
    onDblClick?: MapEvent;
    onClick?: MapEvent;
    onMouseMove?: MapEvent;
    onMoveStart?: MapEvent;
    onMove?: MapEvent;
    onMoveEnd?: MapEvent;
    onMouseUp?: MapEvent;
    onDragStart?: MapEvent;
    onDragEnd?: MapEvent;
    onDrag?: MapEvent;
    onZoomStart?: MapEvent;
    onZoom?: MapEvent;
    onZoomEnd?: MapEvent;
}
export interface FitBoundsOptions {
    linear?: boolean;
    easing?: (time: number) => number;
    padding?: number;
    offset?: MapboxGl.Point | number[];
    maxZoom?: number;
}
export declare type FitBounds = number[][];
export interface Props {
    style: string | MapboxGl.Style;
    accessToken: string;
    center?: number[];
    zoom?: number[];
    minZoom?: number;
    maxZoom?: number;
    maxBounds?: MapboxGl.LngLatBounds | FitBounds;
    fitBounds?: FitBounds;
    fitBoundsOptions?: FitBoundsOptions;
    bearing?: number;
    pitch?: number;
    containerStyle?: React.CSSProperties;
    hash?: boolean;
    preserveDrawingBuffer?: boolean;
    scrollZoom?: boolean;
    interactive?: boolean;
    dragRotate?: boolean;
    movingMethod?: 'jumpTo' | 'easeTo' | 'flyTo';
    attributionControl?: boolean;
    children?: JSX.Element;
}
export interface State {
    map?: MapboxGl.Map;
}
export default class ReactMapboxGl extends React.Component<Props & Events, State> {
    static defaultProps: {
        hash: boolean;
        onStyleLoad: (...args: any[]) => any[];
        preserveDrawingBuffer: boolean;
        center: number[];
        zoom: number[];
        minZoom: number;
        maxZoom: number;
        bearing: number;
        scrollZoom: boolean;
        movingMethod: string;
        pitch: number;
        attributionPosition: string;
        interactive: boolean;
        dragRotate: boolean;
    };
    static childContextTypes: {
        map: React.Requireable<any>;
    };
    state: {
        map: undefined;
    };
    getChildContext: () => {
        map: undefined;
    };
    private container;
    private calcCenter;
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    componentWillReceiveProps(nextProps: Props): null;
    private setRef;
    render(): JSX.Element;
}
