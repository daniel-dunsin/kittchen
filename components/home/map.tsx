import React from 'react';
import MapComponent from '../map/index';
import Pin from '../map/pin';

const Map = () => {
  return (
    <>
      <section className="px-[1rem] py-[4rem]">
        <div className="max-w-[1100px] mx-auto md:px-[4rem]">
          {/* title */}
          <h1 className=" font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] max-w-[400px] text-main">
            Find our closest kittchen’s that meets your needs.
          </h1>
        </div>
      </section>

      <MapComponent>
        <Pin lng={6.5} lat={3.5} />
      </MapComponent>
    </>
  );
};

export default Map;
