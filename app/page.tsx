import Banner from '@/components/home/banner';
import BusinessBenefits from '@/components/home/businessBenefits';
import Facility from '@/components/home/facility';
import Navbar from '@/components/home/navbar';
import WhyUs from '@/components/home/whyUs';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Banner />
      <WhyUs />
      <Facility />
      <BusinessBenefits />
    </main>
  );
}
