'use client';
import React, { useState, useEffect, useMemo, useCallback, ReactElement } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Loader from '../ui/loader';

interface Props {
  children?: ReactElement | ReactElement[];
}

const Map = (props: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  });

  const [map, setMap] = React.useState<google.maps.Map | undefined>();

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const center = useMemo(() => ({ lat: 6.5, lng: 3.37 }), []);

  return (
    <section className="w-full">
      {isLoaded ? (
        <GoogleMap
          onLoad={onLoad}
          center={center}
          zoom={10}
          mapContainerStyle={{ width: '100%', height: '100%', minHeight: '600px' }}
        >
          <>{props?.children}</>
        </GoogleMap>
      ) : (
        <Loader loading={true} loadingText="Rendering map" className="mb-6" />
      )}
    </section>
  );
};

export default Map;
