'use client';
import React, { useState } from 'react';
import MapComponent from '../map/index';
import Pin from '../map/pin';
import { mapLocations } from '@/lib/data/home';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Map = () => {
  const [showLocations, setShowLocations] = useState<boolean>(false);
  const [viewLocations, setViewLocations] = useState<boolean>(false);
  const onMapLoaded = () => setShowLocations(true);

  return (
    <>
      <section className="px-[1rem] py-[4rem]" id="map">
        <div className="max-w-[1100px] mx-auto md:px-[4rem]">
          {/* title */}
          <h1 className=" font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] max-w-[400px] text-main">
            Find our closest kittchen’s that meets your needs.
          </h1>
        </div>
      </section>

      <section className="relative">
        <MapComponent onLoad={onMapLoaded}>
          {mapLocations?.map((location, index) => {
            return (
              <Pin {...location?.coordinates} key={index}>
                <div className="w-[120px] text-center font-semibold">
                  <p>{location?.place}</p>
                </div>
              </Pin>
            );
          })}
        </MapComponent>

        {showLocations && (
          <div className="max-md:hidden z-[10] absolute bottom-0 right-20 w-[90vw] max-w-[500px] p-3 rounded-md bg-white shadow-md">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setViewLocations((prev) => !prev)}>
              <div />
              {viewLocations ? <BiChevronUp size={24} color="#333" /> : <BiChevronDown size={24} color="#333" />}
            </div>

            <div className="overflow-hidden transition-all duration-300" style={{ height: viewLocations ? 285 : 0 }}>
              <div>
                <header>
                  <h1 className="text-[.9rem] font-semibold">
                    Our commercial kitchens are located in densely populated areas with the highest volumes of delivery orders, so
                    you can reach more customers online. Now you can supercharge your restaurant growth and earning potential
                    across the country.
                  </h1>
                </header>
                <div className="mt-4">
                  {mapLocations?.map((location, index) => {
                    return (
                      <p className="py-2 border-b-2 text-[.85rem] cursor-pointer" key={index}>
                        {location?.place}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Map;
