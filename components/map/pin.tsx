'use client';
import { MapLocation } from '@/lib/schema/interfaces/map.interface';
import { MarkerF, InfoWindowF } from '@react-google-maps/api';
import React, { ReactElement, useState } from 'react';

interface Props extends MapLocation {
  children?: ReactElement;
}

const Pin = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MarkerF position={{ lat: props.lat, lng: props.lng }} onClick={() => setIsOpen(true)}>
      <InfoWindowF zIndex={20} position={{ lat: props.lat, lng: props.lng }} onCloseClick={() => setIsOpen(false)}>
        <>{props?.children}</>
      </InfoWindowF>
    </MarkerF>
  );
};

export default Pin;
