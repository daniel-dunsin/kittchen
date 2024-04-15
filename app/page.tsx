import Banner from '@/components/home/banner';
import BusinessBenefits from '@/components/home/businessBenefits';
import Comparison from '@/components/home/comparison';
import CTA from '@/components/home/cta';
import Facility from '@/components/home/facility';
import FAQ from '@/components/home/faq';
import Footer from '@/components/home/footer';
import Navbar from '@/components/home/navbar';
import Partnership from '@/components/home/partnership';
import WhyUs from '@/components/home/whyUs';
import Map from '@/components/home/map';
import Image from 'next/image';
import ObjQuestion from '@/components/questionnaire/objQuestion';
import TheoryQuestion from '@/components/questionnaire/theoryQuestion';
import Questionnaire from '@/components/home/questionnaire';

export default function Home() {
  return (
    <main>
      <Banner />
      <WhyUs />
      <Facility />
      <BusinessBenefits />
      <Comparison />
      <Map />
      <Partnership />
      <FAQ />
      <CTA />
      <Footer />
      <Questionnaire />
    </main>
  );
}
