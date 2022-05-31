import GoogleMapReact from 'google-map-react';
import { useStores } from '../hooks/useStores'; 

function AnyReactComponent({ text }: any) {
  return <div>{text}</div>;
}

export function Mapsp() {
  const { stores } = useStores();

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC6munUy9XhZ5Z5frB4YmnrNvatlZJBytw' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {stores.map((store) => (
          <AnyReactComponent lat={store.latitude} lng={store.longitude} text="My Marker" />
        ))}
      </GoogleMapReact>
    </div>
  );
}
