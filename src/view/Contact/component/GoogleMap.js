import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 21.0278,
            lng: 105.8342
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }} className="mt-2">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDaZUO37NYTHF4FfopNAnEUYGcBNNil6QM" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={21.0278}
                        lng={105.8342}
                        name="My Marker"
                        color="red"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;