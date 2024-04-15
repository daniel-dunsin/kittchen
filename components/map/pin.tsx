'use client';
import { MapLocation } from '@/lib/schema/interfaces/map.interface';
import { MarkerF, InfoWindowF } from '@react-google-maps/api';
import React from 'react';

interface Props extends MapLocation {}

const Pin = (props: Props) => {
  return (
    <MarkerF position={{ lat: props.lat, lng: props.lng }}>
      <>
        <InfoWindowF position={{ lat: props.lat, lng: props.lng }}></InfoWindowF>
      </>
    </MarkerF>
  );
};

export default Pin;
