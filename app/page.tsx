import Banner from '@/components/home/banner';
import BusinessBenefits from '@/components/home/businessBenefits';
import Comparison from '@/components/home/comparison';
import CTA from '@/components/home/cta';
import Facility from '@/components/home/facility';
import Navbar from '@/components/home/navbar';
import Partnership from '@/components/home/partnership';
import WhyUs from '@/components/home/whyUs';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Banner />
      <WhyUs />
      <Facility />
      <BusinessBenefits />
      <Comparison />
      <Partnership />
      <CTA />
    </main>
  );
}
