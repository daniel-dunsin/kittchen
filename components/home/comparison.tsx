import { comparison } from '@/lib/data/home';
import React from 'react';

const Comparison = () => {
  return (
    <section className="px-[1rem] py-[4rem]">
      <div className="max-w-[1100px] mx-auto md:px-[4rem]">
        {/* title */}
        <h1 className=" font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] text-main">
          {"Kittchen's"} compared <br /> to a traditional resturant
        </h1>

        <div className="mt-8 flex flex-col gap-[1rem]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[1rem]">
            <div className="max-md:hidden"></div>
            <div>
              <h1 className=" font-bold text-[1.1rem] md:text-[1.1rem] md:leading-[1.2] text-main">{"Kittchen's"}</h1>
            </div>

            <div>
              <h1 className=" font-bold text-[1.1rem] md:text-[1.1rem] md:leading-[1.2] text-main">Brick & Mortar</h1>
            </div>
          </div>

          {comparison?.map((comparison, index) => {
            return (
              <article key={index} className="pb-5 border-b-2 mt-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[1rem] items-start gap-y-[2rem]">
                  <h1 className="max-md:col-span-2">{comparison?.title}</h1>
                  <div>
                    <h1 className="inline-block text-[2.8rem] md:text-[4rem] font-bold leading-[1]">
                      {comparison?.kittchen?.title}
                    </h1>
                    {comparison?.kittchen?.subtitle && (
                      <span className="inline-block ml-[2px]">{comparison?.kittchen?.subtitle}</span>
                    )}

                    <p className="mt-2 text-[.8rem] md:max-w-[250px]">{comparison?.kittchen?.body}</p>
                  </div>

                  <div>
                    <h1 className="inline-block text-[2.8rem] md:text-[4rem] font-bold leading-[1]">
                      {comparison?.traditional?.title}
                    </h1>
                    {comparison?.traditional?.subtitle && (
                      <span className="inline-block ml-[2px]">{comparison?.traditional?.subtitle}</span>
                    )}

                    <p className="mt-2 text-[.8rem] md:max-w-[250px]">{comparison?.traditional?.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
