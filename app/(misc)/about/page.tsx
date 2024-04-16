import AboutBanner from '@/components/about/banner';
import AboutCTA from '@/components/about/cta';
import Patnering from '@/components/about/patnering';
import WhatSetsUsApart from '@/components/about/whatSetsUsApart';
import WhoWeAre from '@/components/about/whoWeAre';
import Footer from '@/components/home/footer';
import React from 'react';

const Page = () => {
  return (
    <main>
      <AboutBanner />
      <WhoWeAre />
      <WhatSetsUsApart />
      <Patnering />
      <AboutCTA />
      <Footer />
    </main>
  );
};

export default Page;
